import axios from "axios";

// Create Axios Instance
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // If you use localStorage or cookies, get token here
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor for handling token refresh later
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle 401 and refresh token logic here if needed
    return Promise.reject(error);
  }
);
