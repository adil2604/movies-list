import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getMoviesList = () => {
  return api.get("/movies_list/");
};
export const addMoviesList = (data) => {
  return api.post("/movies_list/", data);
};
export const destroyMoviesList = (data) => {
  return api.delete(`/movies_list/${data.id}`);
};
export const addMovieToList = (data) => {
  return api.post("/movies/", data);
};
export const destroyMovie = (data) => {
  return api.delete(`/movies/${data.id}`);
};
