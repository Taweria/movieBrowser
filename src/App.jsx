import './App.css'
import { useState, useEffect } from 'react';
import getMovies from './API/GetMovies';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import { Link } from "react-router-dom";
import Loading from './Components/Loading.jsx';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

useEffect(() => {
  getMovies()
    .then(movies => setMovies(movies))
    .catch(error => console.error('Error fetching movies:', error.message));
    
}, [])

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])



const moviesList = movies.map((movie) => (
  <div key={movie.id} className="Movie-pre">
    <Link to={`/Details/${movie.id}`}>
        <h2 className="Movie-title">{movie.title}</h2>
        <div className="Movie-rating-global">
          <svg className="Star" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"/><g filter="url(#filter0_b_90_164)"><path d="M17.6121 10.0418L14.0148 9.51815L12.4067 6.25262C12.3627 6.16321 12.2905 6.09083 12.2012 6.04684C11.9774 5.93614 11.7053 6.02839 11.5934 6.25262L9.98528 9.51815L6.38791 10.0418C6.28873 10.056 6.19805 10.1028 6.12863 10.1738C6.0447 10.2602 5.99845 10.3765 6.00004 10.497C6.00163 10.6176 6.05094 10.7325 6.13713 10.8167L8.73987 13.3584L8.12496 16.9475C8.11054 17.031 8.11976 17.1169 8.15159 17.1954C8.18341 17.2739 8.23655 17.3419 8.305 17.3917C8.37344 17.4415 8.45444 17.4711 8.53882 17.4771C8.6232 17.4831 8.70757 17.4654 8.78238 17.4258L12 15.7313L15.2177 17.4258C15.3055 17.4726 15.4075 17.4882 15.5053 17.4712C15.7518 17.4286 15.9176 17.1945 15.8751 16.9475L15.2602 13.3584L17.8629 10.8167C17.9338 10.7472 17.9805 10.6563 17.9947 10.557C18.0329 10.3086 17.8601 10.0787 17.6121 10.0418Z" fill="currentColor"/></g><defs><filter id="filter0_b_90_164" x="1.19" y="1.19" width="21.62" height="21.0983" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.405"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_90_164"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_90_164" result="shape"/></filter></defs></svg>
          <h2 className="Movie-rating">{movie.vote_average}</h2>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movies-img" className="Movie-img" />
    </Link>
  </div>
));

const trending = movies.filter((movie) => movie.vote_average >= 8
).slice(0, 1).map((movie) => (
  <div key={movie.id} className="Movie-trending">
    <Link to={`/Details/${movie.id}`}>
        <div className="Movie-trending-header">
            <img src="play-btn.svg" alt="play button" />
            <div className="Movie-trending-title">
                <h3 className="Movie-trending-spotlight"> Movie Spotlight </h3>
                <h2 className="Movie-trending-title-title">{movie.title}</h2>
            </div>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movies-img" className="Movie-trending-img" />
    </Link>
  </div>
));



  return (
    <>
    {loading && <Loading />}
      <Header />
      {trending}
      <h3> Trending </h3>
      <div className="Movies-div">
        {moviesList}
      </div>
      <Footer />
    </>
  );
}

export default App;
