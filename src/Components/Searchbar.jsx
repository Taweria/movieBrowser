import React, { useState } from 'react';
import { useEffect } from 'react';
import getMovies from '../API/GetMovies.js';

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
                <img src="loupe.svg" alt="search" onClick={handleSearch}/>
                <input type="text" className="Searchbar-input" placeholder="Search for a movie..." value={searchText} onChange={handleInputChange}/>
           </div>
        <div className="card-group">
        {searchedMovie.map((movie) => (
          <div className="card" key={movie.id}>
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
        </div>
    );
}