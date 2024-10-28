import axiosInstance from "../axiosConfig";
import { tokenService } from "./tokenService";

let refreshInterval;

let storedCredentials = { username: '', password: '' };

const login = async (data) => {
    try {
        const response = await axiosInstance.post("auth/login", data);
        tokenService.saveToken(response.data.token);

        // Guardar credenciales para refrescar token
        storedCredentials = { username: data.username, password: data.password };

        startTokenRefresh();
        return response.data;
    } catch (error) {
        throw new Error("Credenciales inválidas");
    }
};

const refreshAuthToken = async () => {
    try {
        const response = await axiosInstance.post("auth/login", {
            username: storedCredentials.username,
            password: storedCredentials.password,
        });
        tokenService.saveToken(response.data.token);
    } catch (error) {
        logout(); //cerrar sesión si falla
    }
};

const startTokenRefresh = () => {
    if (refreshInterval) return;

    refreshInterval = setInterval(() => {
        refreshAuthToken();
    }, 1800000); // refresca el token cada 30 min
};

const stopTokenRefresh = () => {
    clearInterval(refreshInterval);
    refreshInterval = null;
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
    stopTokenRefresh();
};

const authService = {
    login,
    register,
    isAuthenticated,
    logout,
};

export default authService;