import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import App from './App.jsx';
const { useState } = React;

var MovieList = ({ movies, filtered, onWatchedToggle}) => {
  console.log('MovieList props:', movies);
  console.log('FilteredList props', filtered);

  if (movies.length > 0 && filtered.length === 0) {
    return (
      <div className="movie-list">
        {movies.map(movie => (
          <MovieListEntry key={movie.title} movie={movie} onWatchedToggle={onWatchedToggle}/>
        ))}
      </div>
    );
  } else if (movies.length === 0 && filtered.length === 0) {
    return (
      <div className="movie-list">No Movies Currently Added</div>
    );
  } else if (filtered.length > 0) {
    return (
      <div className="filtered-movie-list">
        {filtered.map(movie => (
          <MovieListEntry key={movie.title} movie={movie} onWatchedToggle={onWatchedToggle}/>
        ))}
      </div>
    );
  }
}

export default MovieList;