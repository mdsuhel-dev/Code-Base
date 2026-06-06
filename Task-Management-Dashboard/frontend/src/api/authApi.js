import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const signup = (userData) => {
  return api.post("/auth/register", userData);
};

export const login = (userData) => {
  return api.post("/auth/login", userData);
};

export const getMe = () => {
  return api.get("/auth/me");
};

export default api;