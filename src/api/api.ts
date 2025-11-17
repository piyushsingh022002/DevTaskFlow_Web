import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
    withCredentials: true,
    headers: {"Content-Type" : "application/json"}
});

// You can add interceptors or other configurations here if needed
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if(token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

//centralize the error handling
api.interceptors.response.use(
    (res) => res,
    (error) => {
        const message = error.response?.data?.message || "Something went Wrong";
        return Promise.reject(new Error(message));
    }
);

export default api;