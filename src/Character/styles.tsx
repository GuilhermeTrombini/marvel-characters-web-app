import styled from "styled-components";

interface ContainerProps {
  thumbnail: {
    path: string;
  };
}

export const Container = styled.div`
  display: block;
  position: relative;
  margin: 0;
  align-items: center;

  min-height: calc(100vh - 100px);
  background: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  overflow: auto;
  padding-bottom: 100px;
`;

export const ContainerSafe = styled.div<ContainerProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  min-height: 100%;
  background: url(${(props) => props.thumbnail.path}/portrait_uncanny.jpg)
    center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  z-index: -1;
`;

export const SearchBack = styled.button`
  font-family: Bungee;
  text-align: center;
  font-size: 1rem;
  color: #fff;
  margin: 0 auto;
  background: transparent;
  margin-top: 5%;
  text-transform: uppercase;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ButtonCard = styled.button`
  display: flex;
  border: none;
  background: transparent;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
  outline: none;
`;

export const MoreInfo = styled.button`
  display: flex;
  position: relative;
  font-family: Roboto;
  border: none;
  border-radius: 4px;
  background: #121212;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 10px 12px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;

export const CharImage = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  height: 150px;
  width: 150px;
`;

export const CharName = styled.h3`
  font-family: Bungee;
  text-align: center;
  font-size: 1rem;
  color: #fff;
  margin: 20px auto;
  padding: 0 20px;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HomeTitle = styled.h4`
  position: absolute;
  bottom: 50px;
  left: 50%;
  opacity: 87%;
  transform: translateX(-50%);
  font-family: Bungee;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  line-height: 1.5;
  margin: 0 auto;
  padding-top: 20%;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding-top: 10%;
  }
`;

export const NotFound = styled.h4`
  opacity: 87%;
  font-family: Bungee;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  line-height: 1.5;
  margin: 0 auto;
  padding-top: 20%;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding-top: 10%;
  }
`;

export const Copyright = styled.a`
  position: absolute;
  cursor: pointer;
  font-size: 0.8rem;
  bottom: 19px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-decoration: none;
`;
