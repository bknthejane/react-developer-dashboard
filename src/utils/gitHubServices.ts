import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token:string = import.meta.env.VITE_TOKEN;

export const fetchUsers = (since = 0) => {
    return axios.get(`${BASE_URL}/users?since=${since}`, {
        headers:{
            Authorization: `token ${token}`
        }
    });
}

export const searchUsers = (query: string) => {
    return axios.get(`${BASE_URL}/search/users?q=${query}`, {
        headers:{
            Authorization: `token ${token}`
        }
    });
}

export const getUserDetail = (username: string) => {
    return axios.get(`${BASE_URL}/users/${username}`,{
        headers:{
            Authorization: `token ${token}`
        }
    });
}