import React, { useState } from 'react';
import { useEffect } from 'react';
import "../Styles/RelatedMovies.css";
import getSimilar from '../API/GetSimilar.js';
import { useParams } from 'react-router-dom';
import unknown from '../assets/unknown.svg';
import { Link } from "react-router-dom";

export default function RelatedMovies() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    getSimilar(id)
      .then((movies) => setMovies(movies))
      .catch((error) => console.error('Error fetching movies:', error.message));
    }, [id]);

    const similar = movies.slice(0, 5).map((movie) => (
        <div key={movie.id} className="Movies-related-list">
            <Link to={`/Details/${movie.id}`} className="Movies-related-link">
                <img src={movie.backdrop_path != null ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `${unknown}`} alt="movies-img" className="Movie-related-img"/>
                <h2 className="Movies-related-title">{movie.title}<span className="Movie-related-date"> ({(movie.release_date).split("-")[0]})</span></h2> 
            </Link>
        </div>
    ));

    return (
        <div className="Movies-related-div">
            <h2>Related Movies</h2>
            <div className="Movies-related-global">
                {similar}
            </div>
        </div>
    );
}