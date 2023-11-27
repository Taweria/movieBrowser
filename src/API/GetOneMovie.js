import Axios from "axios";
const APIKEY = import.meta.env.VITE_MOVIE_APIKEY;

export default function getOneMovie(id) {
  return Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=`+ APIKEY)
    .then(response => {
      const movie = response.data;
      return movie;
    })
    .catch(error => {
      console.error("Error fetching movie:", error);
      throw error;
    });
}