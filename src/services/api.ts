import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.230.117.182:3333',
});

export default api;
