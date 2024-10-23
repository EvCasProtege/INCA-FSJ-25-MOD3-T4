// authService.js
import axiosInstance from '../axiosConfig';

const authService = {
  login: async (username, password) => {
    const response = await axiosInstance.post('/login', { username, password });
    return response.data; // Aquí recibirás el JWT
  },
  register: async (username, password) => {
    const response = await axiosInstance.post('/register', { username, password });
    return response.data;
  },
};

export default authService;
