import axiosInstance from "../axiosConfig";
import { tokenService } from "./tokenService";

const login = async (data) => {
    try {
        const response = await axiosInstance.post("auth/login", data);
        tokenService.saveToken(response.data.token);

        return response.data;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }
};

const register = async (data) => {
    const response = await axiosInstance.post("auth/register", data);

    return response.data;
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