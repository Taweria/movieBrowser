import Axios from "axios";
const APIKEY = import.meta.env.VITE_MOVIE_APIKEY;

export default function getMovies() {
  return Axios.get("https://api.themoviedb.org/3/discover/movie" + "?api_key=" + APIKEY)
    .then(response => {
      const movies = response.data.results;
      return movies;
    })
    .catch(error => {
      console.error("Error fetching movies:", error);
      throw error;
    });
}