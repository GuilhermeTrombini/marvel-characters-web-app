import styled from "styled-components";

export const Container = styled.div`
  display: block;
  margin: 0;
  align-items: center;
  height: 100vh;
  min-height: 100%;
  background: black;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
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
  cursor: pointer;
`;

export const CharImage = styled.img`
  border-radius: 10px;
  height: 100px;
  width: 100px;
`;

export const CharName = styled.h3`
  font-family: Bungee;
  text-align: center;
  font-size: 1rem;
  color: #fff;
  margin-left: 20px;

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
  font-size: 2.5rem;
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

export const PlatformTitle = styled.h4`
  position: absolute;
  font-size: 1.5rem;
  bottom: 19px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 87%;
  font-family: Bungee;
  text-align: center;
  color: #fff;
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
