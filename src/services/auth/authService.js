import axiosInstance from "../axiosConfig";

const login = async (data) => {
    try {
        const response = await axiosInstance.post("auth/login", data);
        localStorage.setItem("authToken", response.data.token);

        return response.data;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }
};

const register = async (data) => {
    const response = await axiosInstance.post("auth/register", data);

    return response.data;
};

const authService = {
    login,
    register,
};

export default authService;
