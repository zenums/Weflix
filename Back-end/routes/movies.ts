const express = require('express');
const Router = express.Router();

const { getMoviesPopulars, getMoviesPopularsbyGenre,getMoviesTopRated, getMovieHeader } = require('../controllers/movies');


Router.get("/populars", getMoviesPopulars);

Router.get("/populars/:genreId", getMoviesPopularsbyGenre);

Router.get("/top-rated", getMoviesTopRated);

Router.get("/header", getMovieHeader);

module.exports = Router;
