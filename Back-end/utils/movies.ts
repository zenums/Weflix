import { get } from '../services/axios';

export const getApiMovieGenres = async () => {
    try {
        const data = await get("/3/genre/movie/list?language=fr");
        return data.genres;
    } catch (error) {
        throw new Error("Une erreur est survenue lors de la récupération des genres de films.");
    }
};

export const getApiMoviesPopulars = async () => {
    try {
        const data = await get("/3/movie/popular?language=fr&page=1");
        return data
    } catch (error) {
        console.error("Erreur lors de la récupération des films populaires");
    }
}
 
export const getApiMoviesTopRated = async () => {
    try {
        const data = await get("/3/movie/top_rated?language=fr&page=1");
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des films les mieux notés");
    }
}