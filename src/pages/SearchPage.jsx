import React from 'react'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import './SearchPage.css'
import Searchbar from '../Searchbar.jsx'
import { useState, useEffect } from 'react';
import getMovies from '../CallAPI.js';
import getGenre from '../CallAPI.js';

function SearchPage() {

  const [movies, setMovies] = useState([]);

useEffect(() => {
  getMovies()
    .then(movies => setMovies(movies))
    .catch(error => console.error('Error fetching movies:', error.message));
    
}, [])


const moviesList = movies.map((movie) => (
  <div key={movie.id} className="Movie-div-list">
    <a href={`/Details/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movies-img" className="Movie-list-img" />
        <h2 className="Movie-search-title">{movie.title}</h2>
    </a>
  </div>
));

const genres = movies.flatMap((movie) => movie.genre_ids);
const uniqueGenres = [...new Set(genres)];

const genreList = uniqueGenres.map((genre) => (
  <div key={genre} className="Movie-genre">
    {genre}
  </div>
));

  return (
    <div>
      <Header />
        <Searchbar/>
        <div className="Movie-genre-global">
          {genreList}
        </div>
        <div className="Movie-div-list-global">
          {moviesList}
        </div>
      <Footer />
    </div>
  )
}

export default SearchPage