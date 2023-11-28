import Axios from "axios";
const APIKEY = import.meta.env.VITE_MOVIE_APIKEY;

export default function getSimilar(id) {
  return Axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=`+ APIKEY)
    .then(response => {
      const similar = response.data.results;
      return similar;
    })
    .catch(error => {
      console.error("Error fetching similar:", error);
      throw error;
    });
}