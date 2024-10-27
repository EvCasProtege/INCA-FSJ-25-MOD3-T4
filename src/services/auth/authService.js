import axiosInstance from "../axiosConfig";
import { tokenService } from "./tokenService";

const login = async (data) => {
    try {
        const response = await axiosInstance.post("auth/login", data);
        tokenService.saveToken(response.data.token);

        return response.data;
    } catch (error) {
        throw new Error("Credenciales inválidas");
    }
};

const register = async (data) => {
    try {
        const response = await axiosInstance.post("auth/register", data);
    
        return response.data;
    } catch (error) {
        throw new Error("El nombre de usuario ya está en uso")
    }
};

const isAuthenticated = () => {
    return !!tokenService.getToken();
};

const logout = () => {
    tokenService.removeToken();
};

const authService = {
    login,
    register,
    isAuthenticated,
    logout,
};

export default authService;