import axios from "axios";
import { API_BASE_URL } from '../../env';

export const request = ({ url, method, data, headers }) => {
    return axios({
        method: method || 'get',
        url: `${API_BASE_URL}${url}`,
        data,
        headers: {
            ...headers
        }
    });
}

export const addToxenToRequest = (token) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export const removeTokenOnLogout = () => {
    delete axios.defaults.headers.Authorization;
}