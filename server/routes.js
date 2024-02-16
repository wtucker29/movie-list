var controller = require('./controllers');
var router = require('express').Router();


//Connect controller methods to their corresponding routes
router.get('/movielist', controller.movielist.get);
router.post('/movielist', controller.movielist.post);


module.exports = router;