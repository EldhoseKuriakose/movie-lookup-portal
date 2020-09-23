import React from 'react';
import './MovieDetails.styles.scss';

const MovieDetails = ({ movieDetails }) => (
    <div className="movie-details-container">
        <h1>{movieDetails.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="poster" />
        <p><b>Released On:</b> {movieDetails.release_date}</p>
        <p><b>Rating :</b> {movieDetails.vote_average}</p>
        {
            movieDetails.genres.map(genre => (
                <span key={genre.id}>{genre.name}&emsp;</span>
            ))
        }
        <p><b>18+ :</b> {movieDetails.adult ? 'Yes' : 'No'}</p>
        <p>Budget : $ {movieDetails.budget}</p>
        <p><b>Languages :</b> {
            movieDetails.spoken_languages.map(language => (
                <span key={language.name}>{language.name}</span>
            ))}
        </p>
        <p><b>Tagline :</b> {movieDetails.tagline}</p>
        <p><b>Production Companies :</b> {
            movieDetails.production_companies.map(company => (
                <span key={company.id}>{company.name}</span>
            ))}
        </p>
        <p><b>Production Countries :</b> {
            movieDetails.production_countries.map(country => (
                <span key={country.name}>{country.name}</span>
            ))}
        </p>
        <p>{movieDetails.overview}</p>
    </div>
);

export default MovieDetails;