import React from 'react';
import Footer from '../Components/Footer.jsx';
import './Details.css';
import { useParams } from 'react-router-dom';
import getOneMovie from '../API/GetOneMovie.js';
import { useState, useEffect } from 'react';

export default function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        getOneMovie(id)
            .then(movie => setMovie(movie))
            .catch(error => console.error('Error fetching movie:', error.message));
    }, [id]);
        

    const movieDetails = ((movie) => (
        <div key={movie.id} className="Movie-details">
            <div className="Movie-details-img-global">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movie-img" className="Movie-details-img"  />
                <img src="../play-btn.svg" alt="play button" className="Movie-details-play" />
            </div>
            <div className="Movie-details-title-global">
                <h1 className="Movie-details-title">{movie.title}</h1> 
                <span className="Movie-details-resolution">4K</span>
            </div>
           <div className="Movie-details-rating-note-global">
                <div className="Movie-details-runtime">
                    <img src="../clock.svg" alt="clock" />
                    <span>{movie.runtime} minutes</span>
                </div>
                <div className="Movie-details-note">
                    <img src="../star.svg" alt="star" className="Movie-details-star" />
                    <span>{movie.vote_average} (IMDb)</span>
                </div>
           </div>
            <div className="Movie-details-date-genre-global">
                <div className="Movie-details-date">
                    <h2> Release Date</h2>
                    <span>{movie.release_date}</span>
                </div>
                <div className="Movie-details-genre">
                    <h2>Genre</h2>
                    <div className="Movie-details-flex">
                    {movie.genres && movie.genres.map(genre => (
                        <span key={genre.id} className="Movie-details-genres"> {genre.name} </span>
                    ))}
                    </div>
                </div>
            </div>
            <div className="Movie-details-synopsis">
                <h2>Synopsis</h2>
                <p>{movie.overview}</p>
            </div>
        </div>
    ));

    return (
        <div>
            {movieDetails(movie)}
            <Footer />
        </div>
    );
}