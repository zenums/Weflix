import { Request, Response } from "express";
import { getApiMovieGenres } from "../utils/genres";
import { Genre } from "../types/genreTypes";

const getFavoriteGenres = async (request: Request, response: Response) => {
  try {
    const genres: Genre[] = await getApiMovieGenres();
    const limitedGenres = genres.slice(0, 8);
    response.status(200).json(limitedGenres);
  } catch (error) {
    response
      .status(500)
      .json({
        error:
          "Une erreur est survenue lors de la récupération des genres de films.",
      });
  }
};

module.exports = { getFavoriteGenres };