import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import App from './App.jsx';
const { useState } = React;

var MovieList = ({ filtered, onWatchedToggle}) => {
  //console.log('MovieList props:', movies);
  //console.log('FilteredList props', filtered);

  return (
    <div className="movie-list">
      {filtered.map(movie => (
        <MovieListEntry key={movie.title} movie={movie} onWatchedToggle={onWatchedToggle} />
      ))}
    </div>
  );
}

export default MovieList;