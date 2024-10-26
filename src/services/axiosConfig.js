// axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // El proxy redirigirá a http://localhost:5000/api
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token && config.url.includes("/auth/")) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;