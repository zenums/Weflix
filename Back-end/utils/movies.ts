import { get } from '../services/axios';


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

