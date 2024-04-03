const axios = require('axios');
type AxiosRequestConfig = typeof axios.AxiosRequestConfig;
type AxiosError = typeof axios.AxiosError;

const tokenTMDB = process.env.TMDB_API_KEY || "Back-end/services/axios.ts";

const instanceTMDB = axios.create({
    baseURL: "https://api.themoviedb.org",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${tokenTMDB}`
    }
});

instanceTMDB.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (tokenTMDB && config.headers) {
            config.headers.Authorization = `Bearer ${tokenTMDB}`;
        }
        else {
            console.error("Token non défini");
        }
        return config; 
    },
    (error: AxiosError) => {
        return Promise.reject(error); 
    }
);

const get = async (url: string) => {
    const response = await instanceTMDB.get(url);
    if (response.status === 200) {
        return response.data;
    } else {
        console.error("Échec de la requête Axios", response);
        throw new Error("Échec de la requête Axios");
    }
};

export { get };
