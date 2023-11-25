import Axios from "axios";
const APIKEY = import.meta.env.VITE_MOVIE_APIKEY;

export default function getGenre(){
    return Axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=" + APIKEY + "&language=en")
      .then(response => {
        const genre = response.data.genres;
        return genre;
      })
      .catch(error => {
        console.error("Error fetching genre:", error);
        throw error;
      });
  }