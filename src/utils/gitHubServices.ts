import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUsers = (since = 0) => {
    return axios.get(`${BASE_URL}/users?since=${since}`);
}

export const searchUsers = (query: string) => {
    return axios.get(`${BASE_URL}/search/users?q=${query}`);
}

export const getUserDetail = (username: string) => {
    return axios.get(`${BASE_URL}/users/${username}`);
}