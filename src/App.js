import React, { useEffect, useState } from 'react';
import './App.scss';
import searchIcon from './image/search.svg';
import popcorn from './image/popcorn.png';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=e50ad83e';

// const movie = {
//     "Title": "Spider-Man",
//     "Year": "2002",
//     "imdbID": "tt0145487",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
// }

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('');

  useEffect(() => {
    searchMovies('Spider-man');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const searchInputHandler = (e) => {
    setMovieSearch(e.target.value);
  };

  const searchClickHandler = () => {
    searchMovies(movieSearch);
  };

  const searchKeyPressed = (e) => {
    if (e.key === 'Enter') {
      // Cancel the default action, if needed
      e.preventDefault();
      searchMovies(movieSearch);
    }
  };

  return (
    <div className="app">
      <div className="logo">
        <h1>
          <a href="#home">MovieSpace</a>
        </h1>
        <img src={popcorn} alt="logo" />
      </div>

      <form className="search">
        <input
          type="search"
          value={movieSearch}
          onChange={searchInputHandler}
          onKeyDown={searchKeyPressed}
          placeholder="Search for movies"
        />
        <img src={searchIcon} alt="search" onClick={searchClickHandler} />
      </form>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, pos) => (
            <MovieCard movie={movie} key={pos} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
