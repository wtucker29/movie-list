import React from 'react';
import App from './App.jsx';

var MovieListEntry = ({movie, onWatchedToggle}) => {
  const handleWatchedToggle = () => {
    // something
    onWatchedToggle(movie.title);
  };

  return (
    <div className="movie-list-entry">
      <div className="movie-list-entry-content">
        <span className="movie-list-entry-title">{movie.title}</span>
        <button className={movie.watched ? 'button-3 watched' : 'button-3 to-watch'} onClick={handleWatchedToggle}>{movie.watched ? 'Watched' : 'Not Watched'}</button>
      </div>
    </div>
  );
}

export default MovieListEntry;