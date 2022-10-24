import React from 'react';
import './sass/MovieCard.scss';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="movie__year">
        <p>{movie.Year}</p>
      </div>

      <figure className="movie__poster">
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://costumediscounters-weblinc.netdna-ssl.com/product_images/womens-curvy-miss-santa-costume/59f9ad1e69702d5084076b8d/detail.jpg?c=1510401585'
          }
          alt={movie.Title}
        />
        <figcaption className="movie__poster-title">
          <span>Type: {movie.Type}</span>
          <span>Name: {movie.Title}</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default MovieCard;
