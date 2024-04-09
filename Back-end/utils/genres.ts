import { get } from '../services/axios';

export const getApiSeriesGenres = async() => {
    try {
        const data = await get(`/3/genre/movie/list?language=fr`);
        return data;
    } catch (error) {
        console.error(error);
        console.error("Erreur lors de la récupération des genre de la série Api.");
    }
}

export const getApiMovieGenres = async () => {
    try {
        const data = await get("/3/genre/movie/list?language=fr");
        return data.genres;
    } catch (error) {
        throw new Error("Une erreur est survenue lors de la récupération des genres de films.");
    }
};