const express = require('express');
import { Request, Response } from 'express';
const Router = express.Router();

const { getMoviesPopulars, getMoviesPopularsbyGenre } = require('../controllers/movies');


Router.get("/populars", getMoviesPopulars);

Router.get("/populars/:genreId", getMoviesPopularsbyGenre);

module.exports = Router;
