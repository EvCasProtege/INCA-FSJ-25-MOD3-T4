import axiosInstance from './axiosConfig';

const dashboardService = {
  getDashboard: async () => {
    const response = await axiosInstance.get('/auth/dashboard');
    return response.data;
  }
};

export default dashboardService;
