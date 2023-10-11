import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('authtoken')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('authtoken')}`
    }
    return req;
})

export default API;