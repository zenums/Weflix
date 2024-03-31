import { get } from '../services/axios';

export const getApiSerieHeader = async (serieId: string) => {
    try {
        const data = await get(`/3/tv/${serieId}?language=fr`);
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des informations de la série.");
    }
}