import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import MarvelApiService from "../MarvelApi";
import md5 from "md5";
import { SearchOutlined } from "@ant-design/icons";
import {
  Container,
  SearchBack,
  ButtonCard,
  CharImage,
  CharName,
  PlatformTitle,
  NotFound,
  Copyright,
} from "./styles";

interface CharacterStructure {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
  };
  urls: {
    url: string;
  }[];
}

interface LocationInterface {
  state: { keywordState: string };
}

function Search() {
  const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  const time = Number(new Date());
  const secretKey = SECRET_KEY ? SECRET_KEY : "";
  const hash = md5(time + secretKey + PUBLIC_KEY);

  const [characters, setCharacters] = useState<any>([]);
  const location: LocationInterface = useLocation();
  const keyword = location.state?.keywordState
    ? location.state.keywordState
    : "";
  useEffect(() => {
    if (keyword && keyword !== "")
      MarvelApiService.get(
        `characters?name=${keyword}&apikey=${PUBLIC_KEY}&hash=${hash}&ts=${time}`
      ).then((response) => {
        setCharacters(response.data.data.results);
      });
  }, []);

  const CharCard = ({ title, thumbnail, description, url }: any) => {
    const character = {
      name: title,
      description: description,
      thumbnail: thumbnail,
      url: url,
    };
    return (
      <Link to={{ pathname: "/character", state: character }}>
        <ButtonCard>
          <CharImage src={`${thumbnail.path}/standard_medium.jpg`} />
          <CharName>{title}</CharName>
        </ButtonCard>
      </Link>
    );
  };

  return (
    <Container>
      <Link to={{ pathname: "/" }}>
        <SearchBack>
          Voltar a pesquisa
          <SearchOutlined
            style={{ color: "#fff", fontSize: "20px", marginLeft: "10px" }}
          />
        </SearchBack>
      </Link>
      {keyword !== "" && keyword && characters.length > 0 ? (
        characters.map((item: CharacterStructure) => {
          if (item.name) {
            if (
              item.name.toLowerCase().includes(keyword.toLowerCase()) ||
              item.description.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return (
                <CharCard
                  title={item.name}
                  thumbnail={item.thumbnail}
                  description={item.description}
                  url={item.urls[0].url}
                />
              );
            }
          } else {
            return <NotFound>Ops, não encontramos esse personagem.</NotFound>;
          }
          return "";
        })
      ) : (
        <NotFound>Ops, não encontramos esse personagem.</NotFound>
      )}
      <PlatformTitle>mysuperhero</PlatformTitle>
      <Copyright href="http://marvel.com">
        Data provided by Marvel. © 2020 MARVEL
      </Copyright>
    </Container>
  );
}

export default Search;
