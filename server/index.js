const express = require('express');
const db = require('./db');

// Middleware
const morgan = require('morgan');
const cors = require('cors');

// Router
const router = require('./routes.js')

const app = express();
const PORT = 3000 || process.env.PORT;

// Connecting to database happens in ./db/index.js

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Set up routes
app.use('/lists', router);

// Serve client files
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})