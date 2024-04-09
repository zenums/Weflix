import { Request, Response } from "express";
import { Movie, MoviesbyGenre, MovieAPI } from "../types/moviesTypes";
import { getApiMovieGenres } from "../utils/genres";
import { Genre } from "../types/genreTypes";
import { transformAverageToTenth } from "../utils/average";
const {
  getApiMoviesPopulars,
  getApiMoviesTopRated,
} = require("../utils/movies");

const getMoviesPopulars = async (request: Request, response: Response) => {
  try {
    const movies: MovieAPI = await getApiMoviesPopulars();
    response.status(200).json(movies);
  } catch (error) {
    response.status(500).json({
      error:
        "Une erreur est survenue lors de la récupération des films populaires.",
    });
  }
};

const getMoviesPopularsbyGenre = async (
  request: Request,
  response: Response
) => {
  const genreId = Number(request.params.genreId);

  try {
    const movies: MovieAPI = await getApiMoviesPopulars();
    const genres: Genre[] = await getApiMovieGenres();

    const moviesFilteredByGenre = movies.results.filter((movie: Movie) => {
      return (movie.genre_ids as number[]).includes(genreId);
    });

    const genre = genres.find((genre: Genre) => genre.id === genreId);

    if (!genre) {
      throw new Error("Genre not found");
    }

    const moviesByGenre: MoviesbyGenre = {
      genre,
      movies: moviesFilteredByGenre,
    };

    response.status(200).json(moviesByGenre);
  } catch (error: any) {
    response.status(404).json({
      error:
        "Une erreur est survenue lors de la récupération des films populaires par genre.",
      details: error.message,
    });
  }
};

const getMoviesTopRated = async (request: Request, response: Response) => {
  try {
    const movies: MovieAPI = await getApiMoviesTopRated();
    const limitedMovies = movies.results.slice(0, 3); // Limitez aux 3 premiers films

    const genres: Genre[] = await getApiMovieGenres();

    limitedMovies.forEach((movie: Movie) => {
      movie.vote_average = transformAverageToTenth(movie.vote_average);
      movie.genre_ids = movie.genre_ids.map((genreId) => {
        const genre: Genre | undefined = genres.find((g) => g.id === genreId);
        return genre ? genre.name : "";
      });
    });

    response.status(200).json(limitedMovies);
  } catch (error) {
    response.status(500).json({
      error:
        "Une erreur est survenue lors de la récupération des films les mieux notés.",
    });
  }
};

module.exports = {
  getMoviesPopulars,
  getMoviesPopularsbyGenre,
  getMoviesTopRated,
};
