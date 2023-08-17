import axios from "axios";
import { parse, stringify } from "qs";

const axiosClient = axios.create({
    baseURL: 'https://api.duoctaynam.vn',
    paramsSerializer: {
        encode: parse,
        serialize: stringify,
    },
})

axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default axiosClient;

