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
  }
};