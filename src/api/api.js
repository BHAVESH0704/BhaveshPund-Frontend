import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (
        token &&
        config.url &&
        config.url.includes("/admin")
    ) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/admin/login";
        }

        return Promise.reject(error);
    }
);

export default api;