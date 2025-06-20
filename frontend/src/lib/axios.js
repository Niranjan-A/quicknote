import axios from 'axios';

const base_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5501/api/v1'
    : '/api/v1';

const api = axios.create({
  baseURL: base_URL,
});

export default api;
