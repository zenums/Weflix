const RouterSerie = require('express').Router();
const { getSerieHeader } = require('../controllers/series');

RouterSerie.get("/header/:serieId", getSerieHeader);

module.exports = RouterSerie;
