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
    // setWatchedList(updatedList.filter(movie => movie.watched));
    // setToWatchList(updatedList.filter(movie => !movie.watched));
    setMovieList(updatedList);
    setFilteredList(updatedList.filter(movie => (watchedFilter ? movie.watched : !movie.watched)));
  };

  const handleToWatchClick = () => {
    // render only movies with watched: false as key/value pair
    setWatchedFilter(false);
    setFilteredList(movieList.filter(movie => !movie.watched));
    // setWatchedList([]);
    //setToWatchList(moviesList.filter(movie => !movie.watched));
  };

  const handleWatchClick = () => {
    // render only movies with watched: true as key/value pair
    setWatchedFilter(true);
    setFilteredList(movieList.filter(movie => movie.watched));
    // setToWatchList([]);
    //setWatchedList(moviesList.filter(movie => movie.watched));
  };

  const handleAddClick = (query) => {
    // create function to add movie to list
    var addedMovie = {title: query, watched: false};
    var list = [...movieList, addedMovie];

    // Use setMovieList on value we set the added movie to
    setMovieList(list);
    setFilteredList(list);
    // setWatchedList(list);
    // setToWatchList(list);
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
      setFilteredList(movieList);
    }
  };

  return (
    <div>
      <h1 className="page-title">Movie List</h1>
      <div className="addbar">
        <AddMovie onAddClick={handleAddClick}/>
      </div>
      <div className="navbar">
        <Search onSearchClick={handleSearchClick} onToWatchClick={handleToWatchClick} onWatchedClick={handleWatchClick}/>
      </div>
      <div className="list">
        <MovieList movies={movieList} filtered={filteredList} onWatchedToggle={handleWatchedToggle}/>
      </div>
    </div>
  )
};

export default App;