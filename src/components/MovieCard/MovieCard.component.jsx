import React from 'react';
import './MovieCard.styles.scss';

const MovieCard = ({ id, title, rating, released, description, poster, handleDisplayDetails }) => (
    <div className="movie-card-container">
        <div className="top-div">
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
            <div className="right-div">
                <h2 id={id} onClick={e => handleDisplayDetails(e)}>{title}</h2>
                <h3>Rated: {rating}</h3>
                <h3>Released On: {released}</h3>
            </div>
        </div>
        <p>{description}</p>
    </div>
);

export default MovieCard;