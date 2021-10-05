import styled from "styled-components";
import HomeBackground from "../assets/home_bkg.png";

export const Container = styled.div`
  display: block;
  position: relative;
  margin: 0;
  align-items: center;
  height: 100vh;
  min-height: 100%;
  background: url(${HomeBackground}) center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-top: 50%;

  @media (min-width: 768px) {
    margin-top: 10%;
  }

  @media (min-width: 1200px) {
    margin-top: 5%;
  }
`;

export const HomeTitle = styled.h1`
  font-family: Bungee;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  line-height: 1.5;
  margin: 0 auto;
  padding-top: 20%;
  text-transform: uppercase;
  opacity: 87%;

  @media (min-width: 768px) {
    padding-top: 10%;
    font-size: 2.5rem;
  }
`;

export const SerchLabel = styled.input`
  display: flex;
  color: #fff;
  font-size: 14px;
  font-family: Gotham;
  font-weight: 700;
  background-color: #1e222f;
  padding: 18px 16px 18px 50px;
  border: none;
  width: 277px;
  height: 15px;
  border-radius: 8px;
  outline: none;
`;

export const Copyright = styled.a`
  position: absolute;
  font-size: 0.8rem;
  bottom: 19px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;
