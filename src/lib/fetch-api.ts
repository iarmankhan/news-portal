import axios, { AxiosRequestConfig } from "axios";

export const fetchApi = <T>(
  config: AxiosRequestConfig,
  isAuthenticated: boolean = true,
) => {
  const token = localStorage.getItem("token");

  const headers = isAuthenticated
    ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...config.headers,
      }
    : {
        "Content-Type": "application/json",
        ...config.headers,
      };

  return axios.request<T>({
    baseURL: import.meta.env.VITE_API_URL,
    ...config,
    headers,
  });
};
