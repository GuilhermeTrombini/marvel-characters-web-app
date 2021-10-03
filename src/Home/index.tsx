import React from "react";
import { useHistory, withRouter, useLocation } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Container, HomeTitle, SerchLabel, Copyright } from "./styles";

function Home() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const handleSearch = (event: any) => {
    if (event.key === "Enter") {
      console.log(event);
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
        <div
          style={{
            position: "relative",
            margin: "10%",
          }}
        >
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
        </div>
      </div>
      <Copyright href="http://marvel.com">
        Data provided by Marvel. © 2020 MARVEL
      </Copyright>
    </Container>
  );
}

export default withRouter(Home);
