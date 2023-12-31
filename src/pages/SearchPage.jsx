import React, { useState, useEffect } from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import '../Styles/SearchPage.css';
import Searchbar from '../Components/Searchbar.jsx';
import getMovies from '../API/GetMovies.js';
import getGenre from '../API/GetGenre.js';
import { Link } from "react-router-dom";
import Loading from '../Components/Loading.jsx';
import unknown from '../assets/unknown.svg';

function SearchPage() {
const [movies, setMovies] = useState([]);
const [genres, setGenres] = useState([]);
const [filteredMovies, setFilteredMovies] = useState([]);
const [selectedGenre, setSelectedGenre] = useState(null);
const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error('Error fetching movies:', error.message));
  }, []);

  useEffect(() => {
    getGenre()
      .then((genres) => setGenres(genres))
      .catch((error) => console.error('Error fetching genres:', error.message));
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  const genreFilterHandler = (id) => {
    const filteredMovies = movies.filter((movie) => movie.genre_ids.includes(id));
    setFilteredMovies(filteredMovies);
    setSelectedGenre(id);
  };

  const moviesList = (filteredMovies.length > 0 ? filteredMovies : movies).map((movie) => (
    <div key={movie.id} className="Movie-div-list">
      <Link to={`/Details/${movie.id}`} className='Movie-search-link'>
        <img src={movie.backdrop_path != null ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `${unknown}`} alt="movies-img" className="Movie-list-img"/>
        <h2 className="Movie-search-title">{movie.title} <span className="Movie-date"> ({(movie.release_date).split("-")[0]}) </span></h2>
      </Link>
    </div>
  ));

  const genreList = genres.map((genre) => (
    <div key={genre.id} onClick={() => genreFilterHandler(genre.id)} className={`Movie-genre ${selectedGenre !== null && selectedGenre === genre.id ? 'filtered' : ''}`}>
      {genre.name}
    </div>
  ));

  return (
    <div>
    {loading && <Loading />}
      <Header />
      <Searchbar />
      <div className="Movie-genre-global">
        {genreList}
      </div>
      <div className="Movie-div-list-global">
        {moviesList}
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
