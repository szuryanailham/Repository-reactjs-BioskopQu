import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASEURL;
const ApiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movies = await axios.get(`${BaseUrl}/movie/popular?page=1&api_key=${ApiKey}`);
  return movies.data.results;
};

export const searchMovie = async (e) => {
  const search = await axios.get(`${BaseUrl}/search/movie?query=${e}&page=1&api_key=${ApiKey}`);
  return search.data;
};
