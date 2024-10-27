export const tokenService = {
    getToken: () => localStorage.getItem("authToken"),
    saveToken: (token) => localStorage.setItem("authToken", token),
    removeToken: () => localStorage.removeItem("authToken"),
};