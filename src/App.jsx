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
      <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movies-img" className="Movie-img" />
    </div>
  ));

  return (
    <>
      <Header />
      <h3> Trending </h3>
      <div className="Movies-div">
        {moviesList}
      </div>
      <Footer />
    </>
  );
}

export default App;
