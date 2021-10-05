import React from "react";
import { useLocation, Link } from "react-router-dom";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Container,
  SearchBack,
  ContainerSafe,
  CharName,
  HomeTitle,
  Copyright,
  MoreInfo,
} from "./styles";

interface CharacterInterface {
  name: string;
  description: string;
  thumbnail: {
    path: string;
  };
  url: string;
}

interface LocationInterface {
  state: {
    name: string;
    description: string;
    thumbnail: {
      path: string;
    };
    url: string;
  };
}

function Character() {
  const location: LocationInterface = useLocation();
  const character: CharacterInterface = location.state;

  return (
    <Container>
      <ContainerSafe thumbnail={character.thumbnail}></ContainerSafe>
      <Link to={{ pathname: "/" }}>
        <SearchBack>
          Voltar a pesquisa
          <SearchOutlined
            style={{ color: "#fff", fontSize: "20px", marginLeft: "10px" }}
          />
        </SearchBack>
      </Link>
      <div style={{ display: "block", margin: "0 auto" }}>
        <LazyLoadImage
          alt={character.name}
          height={150}
          effect="opacity"
          src={`${character.thumbnail.path}/standard_medium.jpg`}
          width={150}
          style={{ display: "block", borderRadius: "10px" }}
        />
      </div>
      <CharName>{character.name}</CharName>
      <CharName>{character.description}</CharName>
      <a href={`${character.url}`}>
        <MoreInfo>
          <PlusOutlined
            style={{ color: "#fff", fontSize: "20px", marginRight: "10px" }}
          />
          informações
        </MoreInfo>
      </a>
      <HomeTitle>mysuperhero</HomeTitle>
      <Copyright href="http://marvel.com">
        Data provided by Marvel. © 2020 MARVEL
      </Copyright>
    </Container>
  );
}

export default Character;
