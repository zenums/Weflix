import axios from "axios";

const url_backend = import.meta.env.VITE_URIBACKEND;


const instance = axios.create({
    baseURL: url_backend,
    headers: {
        accept: 'application/json',
    }
});

// instanceTMDB.interceptors.request.use(
//     (config: AxiosRequestConfig) => {
//         if (tokenTMDB && config.headers) {
//             config.headers.Authorization = `Bearer ${tokenTMDB}`;
//         }
//         else {
//             console.error("Token non défini");
//         }
//         return config; 
//     },
//     (error: AxiosError) => {
//         return Promise.reject(error); 
//     }
// );

const get = async (url: string) => {
    const response = await instance.get(url);
    if (response.status === 200) {
        return response.data;
    } else {
        console.error("Échec de la requête Axios", response);
        throw new Error("Échec de la requête Axios");
    }
};


export { get };
