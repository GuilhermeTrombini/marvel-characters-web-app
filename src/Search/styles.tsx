import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: block;
  margin: 0;
  align-items: center;
  min-height: calc(100vh - 150px);
  background: black;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 0px 24px;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding: 0px 100px;
    padding-bottom: 150px;
  }
`;

export const SearchBack = styled.button`
  font-family: Bungee;
  text-align: left;
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
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;

  @media (min-width: 930px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1330px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ButtonCard = styled.button`
  display: flex;
  border: none;
  background: transparent;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  outline: none;
  cursor: pointer;
`;

export const CharName = styled.h3`
  font-family: Bungee;
  text-align: left;
  font-size: 1rem;
  color: #fff;
  margin-left: 20px;
  width: 250px;
  white-space: nowrap;
  line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;

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
