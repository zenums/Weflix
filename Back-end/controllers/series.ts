import { Request, Response } from "express";
const { getApiSerieHeader } = require("../utils/series");
import { Serie  } from "~/types/seriesTypes";


const getSerieHeader = async (request: Request, response: Response) => {
    const serieId = Number(request.params.serieId);
  
    try {
      const serie: Serie = await getApiSerieHeader(serieId);
      response.status(200).json(serie);
    } catch (error) {
      response
        .status(500)
        .json({
          error:
            "Une erreur est survenue lors de la récupération des informations de la serie.",
        });
    }
  };

module.exports = { getSerieHeader };