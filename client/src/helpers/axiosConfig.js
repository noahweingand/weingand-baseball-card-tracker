import axios from 'axios';
const instance = axios.create({
// configurations
    baseURL: 'http://localhost:3000/api'
});

// config auth 
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;