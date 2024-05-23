import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  console.log("Making request to:", req.url); // Log request URL
  return req;
});

export default API;
