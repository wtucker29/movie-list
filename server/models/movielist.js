const db = require('../db');

module.exports = {
  getAll: function(callback) {
    const getMoviesQuery = 'SELECT * FROM movies';
    const getMoviesQueryArgs = [];

    db.query(getMoviesQuery, getMoviesQueryArgs, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    });
  },

  create: function(movieInput, callback) {
    // console.log('movieInput from models: ', movieInput);
    const { title, watched } = movieInput;
    const createMovieQuery = 'INSERT INTO movies (title, watched) VALUES (?, ?)';
    db.query(createMovieQuery, [title, watched], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    });
  },

  update: function(updatedMovie, callback) {
    // something
    const { title, watched } = updatedMovie;
    const getMovieIdQuery = 'SELECT id FROM movies WHERE title = ?';
    db.query(getMovieIdQuery, [title], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      const movieId = result[0].id;
      const updateMovieQuery = 'UPDATE movies SET watched = ? WHERE id = ?';
      db.query(updateMovieQuery, [watched, movieId], (err, result) => {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, result);
      });
    });
  }
};