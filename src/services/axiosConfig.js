// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://tu-api.com/api', // Cambia esto a la URL de tu API
});

export default axiosInstance;
