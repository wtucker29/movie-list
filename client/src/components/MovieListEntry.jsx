import React from 'react';
import App from './App.jsx';

var MovieListEntry = ({movie, onWatchedToggle}) => {
  const handleWatchedToggle = () => {
    // something
    onWatchedToggle(movie.title);
  };

  return (
    <div className="movie-list-entry">
      <span className="movie-list-entry-title">{movie.title}</span>
      <button className="watched-btn" onClick={handleWatchedToggle}>{movie.watched ? 'Watched' : 'Not Watched'}</button>
    </div>
  );
}

export default MovieListEntry;