const models = require('../models');

module.exports = {
  get: function(req, res) {
    models.movielist.getAll((err, movies) => {
      if (err) {
        res.status(500).send('Error retrieving movies');
        return;
      }
      res.status(200).send(movies);
    })
  },

  post: function(req, res) {
    // console.log('req.body from controllers: ', req.body);
    const { title, watched } = req.body;
    const movieInput = { title, watched };
    // console.log('movieInput from controllers: ', movieInput);
    models.movielist.create(movieInput, (err, result) => {
      if (err) {
        res.status(500).send('Error adding movie to list');
        return;
      }
      res.status(201).send(result);
    });
  },

  put: function(req, res) {
    // something
    const { title, watched } = req.body;
    const updatedMovie = { title, watched };
    models.movielist.update(updatedMovie, (err, result) => {
      if (err) {
        res.status(500).send('Error updating watched status');
        return;
      }
      res.status(201).send(result);
    });
  }
};