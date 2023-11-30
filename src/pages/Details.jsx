import React from 'react';
import Footer from '../Components/Footer.jsx';
import './Details.css';
import { useParams } from 'react-router-dom';
import getOneMovie from '../API/GetOneMovie.js';
import { useState, useEffect } from 'react';
import Loading from '../Components/Loading.jsx';
import moment from 'moment';
import play from '../assets/play-btn.svg';
import clock from '../assets/clock.svg';
import star from '../assets/star.svg';
import unknown from '../assets/unknown.svg';
import RelatedMovies from '../Components/RelatedMovies.jsx';


export default function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getOneMovie(id)
            .then(movie => setMovie(movie))
            .catch(error => console.error('Error fetching movie:', error.message));
    }, [id]);

    useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])
        

    const movieDetails = ((movie) => (
        <div key={movie.id} className="Movie-details">
            <div className="Movie-details-img-global">
                <img src={movie.backdrop_path != null ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `${unknown}`} alt="movies-img" className="Movie-details-img"/>
                <img src={play} alt="play button" className="Movie-details-play" />
            </div>
            <div className="Movie-details-title-global">
                <h1 className="Movie-details-title">{movie.title}</h1> 
                <span className="Movie-details-resolution">4K</span>
            </div>
           <div className="Movie-details-rating-note-global">
                <div className="Movie-details-runtime">
                    <img src={clock} alt="clock" />
                    <span>{movie.runtime} minutes</span>
                </div>
                <div className="Movie-details-note">
                    <img src={star} alt="star" className="Movie-details-star" />
                    <span>{movie && movie.vote_average ? movie.vote_average.toFixed(1) + ' (IMDb)' : 'N/A'}</span>
                </div>
           </div>
            <div className="Movie-details-date-genre-global">
                <div className="Movie-details-date">
                    <h2> Release Date</h2>
                   <span>{moment(movie.release_date, 'MMMM D, YYYY').format('MMMM D, YYYY')}</span>
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
        {loading && <Loading />}
            {movieDetails(movie)}
            <RelatedMovies />
            <Footer />
        </div>
    );
}