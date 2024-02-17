import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import axios from 'axios';
const { useState, useEffect } = React;

const App = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredList, setFilteredList] = useState([]);
  const [watchedFilter, setWatchedFilter] = useState(false);

  useEffect(() => {
    //something
    axios.get('http://127.0.0.1:3000/lists/movielist')
      .then((response) => {
        setMovieList(response.data);
        setIsLoading(false);
        setFilteredList(response.data);
      })
      .catch((error) => {
        console.error('Error grabbing movie list: ', error);
      });
  }, []);

  const handleWatchedToggle = (title) => {
    // Toggle if movie watched when clicked
    const updatedList = movieList.map(movie => {
      if (movie.title === title) {
        const updatedMovie = { ...movie, watched: !movie.watched};
        console.log('Movie from put request in app.jsx: ', updatedMovie);
        axios.put('http://127.0.0.1:3000/lists/movielist', updatedMovie)
          .then((response) => {
            console.log('Movie updated successfully:', response.data);
          })
          .catch((error) => {
            console.error('Error updating movie:', error);
          });
        return updatedMovie;
      }
      return movie;
    });
    setMovieList(updatedList);
    setFilteredList(updatedList.filter(movie => (watchedFilter ? movie.watched : !movie.watched)));
  };

  const handleToWatchClick = () => {
    // render only movies with watched: false as key/value pair
    setWatchedFilter(false);
    setFilteredList(movieList.filter(movie => !movie.watched));
  };

  const handleWatchClick = () => {
    // render only movies with watched: true as key/value pair
    setWatchedFilter(true);
    setFilteredList(movieList.filter(movie => movie.watched));
  };

  const handleAddClick = (query) => {
    // create function to add movie to list
    var addedMovie = {title: query, watched: false};

    axios.post('http://127.0.0.1:3000/lists/movielist', addedMovie)
      .then((response) => {
        console.log('Movie added successfully:', response.data);
        var list = [...movieList, addedMovie];
        setMovieList(list);
        setFilteredList(list);
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
      })
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
      <h1 className="page-title">William's Movie List</h1>
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