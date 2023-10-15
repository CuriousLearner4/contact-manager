import axios from 'axios';

const api = axios.create({
    baseURL:"https://cmserver-api.onrender.com",
})

export default api;