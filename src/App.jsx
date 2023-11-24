import './App.css'
import { useState, useEffect } from 'react';
import getMovies from './CallAPI.js';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function App() {
  const [movies, setMovies] = useState([]);

useEffect(() => {
  getMovies()
    .then(movies => setMovies(movies))
    .catch(error => console.error('Error fetching movies:', error.message));
    
}, [])

console.log(movies);
const moviesList = movies.map((movie) => (
  <div key={movie.id} className="Movie-pre">
    <h2 className="Movie-title">{movie.title}</h2>
    <h2 className="Movie-rating">&#11088; {movie.vote_average}</h2>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movies-img" className="Movie-img" />
  </div>
));

const trending = movies.filter((movie) => movie.vote_average >= 8
).slice(0, 1).map((movie) => (
  <div key={movie.id} className="Movie-trending">
    <div className="Movie-trending-header">
        <img src="play-btn.svg" alt="play button" />
        <div className="Movie-trending-title">
            <h3 className="Movie-trending-spotlight"> Movie Spotlight </h3>
            <h2 className="Movie-trending-title-title">{movie.title}</h2>
        </div>
    </div>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movies-img" className="Movie-trending-img" />
  </div>
));

  return (
    <>
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
