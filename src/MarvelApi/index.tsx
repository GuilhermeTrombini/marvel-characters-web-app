import axios from "axios";

const MARVEL_API = process.env.REACT_APP_MARVEL_API;

const MarvelApiService = axios.create({
  baseURL: `${MARVEL_API}`,
});

export default MarvelApiService;
