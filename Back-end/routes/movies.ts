const express = require('express');
const Router = express.Router();

const { getMoviesPopulars, getMoviesPopularsbyGenre,getMoviesTopRated } = require('../controllers/movies');


Router.get("/populars", getMoviesPopulars);

Router.get("/populars/:genreId", getMoviesPopularsbyGenre);

Router.get("/top-rated", getMoviesTopRated);


module.exports = Router;
