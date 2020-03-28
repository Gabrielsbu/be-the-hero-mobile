import axios from 'axios';

const http = axios.create({
    baseURL: 'http://192.168.0.17:3333'
})

export default http;