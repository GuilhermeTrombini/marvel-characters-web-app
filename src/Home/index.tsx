import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import {
  Container,
  SearchContainer,
  HomeTitle,
  SerchLabel,
  Copyright,
} from "./styles";

function Home() {
  const history = useHistory();
  const handleSearch = (event: any) => {
    if (event.key === "Enter") {
      history.push("/search", { keywordState: event.target.value });
    } else {
      return null;
    }
  };
  return (
    <Container>
      <HomeTitle>mysuperhero</HomeTitle>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        <SearchContainer>
          <SearchOutlined
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              fontSize: "20px",
              marginLeft: "10px",
            }}
          />
          <SerchLabel
            onKeyDown={(event) => handleSearch(event)}
            placeholder="Pesquise um personagem"
          ></SerchLabel>
        </SearchContainer>
      </div>
      <Copyright href="http://marvel.com">
        Data provided by Marvel. © 2020 MARVEL
      </Copyright>
    </Container>
  );
}

export default withRouter(Home);
