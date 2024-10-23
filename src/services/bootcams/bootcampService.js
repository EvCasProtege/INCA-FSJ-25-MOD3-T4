import axiosInstance from './axiosConfig';

const bootcampService = {
  getBootcamps: async () => {
    const response = await axiosInstance.get('/auth/bootcamps');
    return response.data;
  },
  createBootcamp: async (bootcamp) => {
    const response = await axiosInstance.post('/auth/bootcamps', bootcamp);
    return response.data;
  },
  updateBootcamp: async (id, bootcamp) => {
    const response = await axiosInstance.put(`/auth/bootcamps/${id}`, bootcamp);
    return response.data;
  },
  deleteBootcamp: async (id) => {
    const response = await axiosInstance.delete(`/auth/bootcamps/${id}`);
    return response.data;
  },
};

export default bootcampService;