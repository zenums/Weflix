const RouterGenre = require('express').Router();

const { getFavoriteGenres } = require('../controllers/genres');

RouterGenre.get("/movies", getFavoriteGenres);

module.exports = RouterGenre;