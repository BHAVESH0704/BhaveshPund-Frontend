import axios from "axios";

const api = axios.create({

    baseURL: "http://localhost:8080/api/v1",

    headers: {

        "Content-Type": "application/json",

    },

});

// ==============================
// Response Interceptor
// ==============================

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