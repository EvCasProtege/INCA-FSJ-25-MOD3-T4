import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/",
});

axiosInstance.interceptors.request.use(
    (config) => {
      // Asegurar que todas las solicitudes tengan el encabezado Content-Type
      config.headers['Content-Type'] = 'application/json';
  
      // Agregar el token solo para rutas específicas
      const token = localStorage.getItem('authToken');
      if (token && config.url.includes('/auth/')) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default axiosInstance;
