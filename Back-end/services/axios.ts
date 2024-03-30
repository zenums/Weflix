const axios = require('axios');
type AxiosRequestConfig = typeof axios.AxiosRequestConfig;
type AxiosError = typeof axios.AxiosError;

const tokenTMDB = process.env.TMDB_API_KEY || "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWI4ZmQ5M2QzNjZlOTk5YWRiZGQ5OGI1YmFjYmE2ZiIsInN1YiI6IjY2MDg1OTMyZTYyNzE5MDE2MzBjZTRhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T3moz1ttY4-4CMDVhM53minqAZz79MdhGnqJwpW3Vfg";

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
