import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import exampleMovieData from './exampleMovieData.js';
const { useState } = React;

const App = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [watchedFilter, setWatchedFilter] = useState(false);
  const [watchedList, setWatchedList] = useState([]);
  const [toWatchList, setToWatchList] = useState([]);

  const handleWatchedToggle = (title) => {
    // Toggle if movie watched when clicked
    const updatedList = movieList.map(movie => {
      if (movie.title === title) {
        return { ...movie, watched: !movie.watched};
      }
      return movie;
    });
    setWatchedList(updatedList.filter(movie => movie.watched));
    setToWatchList(updatedList.filter(movie => !movie.watched));
    setMovieList(updatedList);
  };

  // const handleToWatchToggle = () => {
  //   setWatchedFilter(false);
  //   const toWatchMovies = movieList.filter(movie => !movie.watched);
  //   setToWatchList(toWatchMovies);
  // };

  const handleAddClick = (query) => {
    // create function to add movie to list
    var addedMovie = {title: query, watched: false};
    var list = [...movieList, addedMovie];

    // Use setMovieList on value we set the added movie to
    setMovieList(list);
    setWatchedList(list);
    setToWatchList(list);
  };

  const handleSearchClick = (query) => {
    if (query.length > 0) {
      const filteredMovies = movieList.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredMovies.length === 0) {
        alert('No movie by that name found in the list.');
      }
      setFilteredList(filteredMovies);
    } else {
      setFilteredList([]);
    }
  };

  return (
    <div>
      <h1 className="page-title">Movie List</h1>
      <div className="addbar">
        <AddMovie onAddClick={handleAddClick}/>
      </div>
      <div className="navbar">
        <Search onSearchClick={handleSearchClick} />
      </div>
      <div className="list">
        <MovieList movies={movieList} filtered={filteredList} watchedMovies={watchedList} toWatchMovies={toWatchList }onWatchedToggle={handleWatchedToggle}/>
      </div>
    </div>
  )
};

export default App;