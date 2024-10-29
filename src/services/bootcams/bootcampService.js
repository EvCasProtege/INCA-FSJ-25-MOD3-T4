import axiosInstance from "../axiosConfig";

const bootcampService = {
  getBootcamps: async () => {
    const response = await axiosInstance.get('/auth/bootcamps/all');
    return response.data;
  },
  createBootcamp: async (bootcamp) => {
    const response = await axiosInstance.post('/auth/bootcamps/create', bootcamp);
    return response;
  },
  updateBootcamp: async (id, bootcamp) => {
    const response = await axiosInstance.put(`/auth/bootcamps/update/${id}`, bootcamp);
    return response;
  },
  deleteBootcamp: async (id) => {
    const response = await axiosInstance.delete(`/auth/bootcamps/delete/${id}`);
    return response.data;
  },
};

export default bootcampService;
