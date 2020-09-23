import React from 'react';
import MovieCard from '../MovieCard/MovieCard.component';
import './MovieList.styles.scss';

const MovieList = ({ movies, handleDisplayDetails }) => (
    <div className="movie-list-container">
        {
            movies
            ?   movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title} 
                        rating={movie.vote_average} 
                        released={movie.release_date}
                        description={movie.overview}
                        poster={movie.poster_path}
                        handleDisplayDetails={handleDisplayDetails}
                    />
                ))
            : ''
        }  
    </div>
);

export default MovieList;