import axios from 'axios';

const api = axios.create({
    // change to back url
    baseURL: 'http://localhost:3333'
})

export default api;