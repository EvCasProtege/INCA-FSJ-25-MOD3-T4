// productService.js
import axiosInstance from '../axiosConfig';

const productService = {
  getProducts: async (params = {}) => {
    const response = await axiosInstance.get('/products', { params });
    return response.data;
  },
  createProduct: async (product) => {
    const response = await axiosInstance.post('/products', product);
    return response.data;
  },
  updateProduct: async (id, product) => {
    const response = await axiosInstance.put(`/products/${id}`, product);
    return response.data;
  },
  deleteProduct: async (id) => {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response.data;
  },
};

export default productService;
