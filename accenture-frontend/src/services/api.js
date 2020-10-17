import axios from 'axios';

const api = axios.create({
    // change to back url
    baseURL: 'https://mighty-ravine-89050.herokuapp.com/'
})

export default api;