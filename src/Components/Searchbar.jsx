import React, { useState } from 'react';
import { useEffect } from 'react';
import getMovies from '../API/GetMovies.js';
import { Link } from "react-router-dom";
import lens from "../assets/loupe.svg";
import "../Styles/Searchbar.css";
import unknown from '../assets/unknown.svg';

export default function Searchbar() {
    const [searchText, setSearchText] = useState('');
    const [searchedMovie, setSearchedMovie] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    getMovies()
      .then((movies) => setMovies(movies))
      .catch((error) => console.error('Error fetching movies:', error.message));
  }, []);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedMovie(filteredMovies);
    };

    return (
        <div>
           <div className="Searchbar">
                <img src={lens} alt="search" onClick={handleSearch}/>
                <input type="text" className="Searchbar-input" placeholder="Search for a movie..." value={searchText} onChange={handleInputChange} onKeyUp={(e) =>{if (e.key === 'Enter') {handleSearch();}}}/>
           </div>
            <div className="Searched-group">
            {searchedMovie.map((movie) => (
                <div key={movie.id} className="Movie-search-list">
                    <Link to={`/Details/${movie.id}`}>
                        <img src={movie.backdrop_path != null ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `${unknown}`} alt="movies-img" className="Movie-search-img"/>
                        <h2 className="Movie-search-title">{movie.title} <span className="Movie-date"> ({(movie.release_date).split("-")[0]}) </span></h2>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    );
}