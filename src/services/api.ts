import axios from 'axios';

// const baseURL = 'http://18.230.117.182:3333'
const baseURL = 'http://localhost:3333';

const api = axios.create({
  baseURL,
});

export default api;
