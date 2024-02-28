import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

// Define a base URL for your API
const baseURL = "http://localhost:4000"; // Replace with your actual API base URL

// Create an Axios instance with the base URL
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

// Define a generic type for the API response

// Define a function for making GET requests
export const get = async (url, config) => {
  try {
    const response = await axiosInstance.get(url, config);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Define a function for making POST requests
export const post = async (path, data, config) => {
  try {
    const response = await axiosInstance.post(baseURL + path, data, config);
    return response.data;
  } catch (error) {
    throw error.response.data.message; // Re-throw the error to propagate it up the call stack
  }
};
