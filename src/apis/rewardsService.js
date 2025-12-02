import axios from "axios";
import { TRANSACTION_API_URL } from "../utils/constant";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor for request
api.interceptors.request.use(
  (config) => {
    // add login for tokens/auth here for any api calls
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor for response
api.interceptors.response.use(
  (response) => {
    // Handle specific status codes
    if (response.status !== 200) {
      return Promise.reject(
        new Error("An error occurred. Please try again later.")
      );
    }
    return response;
  },
  (error) => {
    console.error("API Error:", error.message);
    return Promise.reject(new Error("Network error. Please try again later."));
  }
);

export async function fetchTransactions() {
  const response = await api.get(TRANSACTION_API_URL);
  return response.data;
}
