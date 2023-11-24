import React from 'react'
import Footer from '../Footer.jsx'
import './SearchPage.css'
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

function SearchPage() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
            .then(movies => setMovies(movies))
            .catch(error => console.error('Error fetching movies:', error.message));
    }, []);

    const movie = movies.find(movie => movie.id === id);


    return (
        <div>
            {movie.title}
            <Footer />
        </div>
    );
}

export default SearchPage