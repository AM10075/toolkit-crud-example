import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5175" });

API.interceptors.request.use((req: any) => {
  if (localStorage.getItem("user") === null) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user") || "{}").token
    }`;
  }
  return req;
});

export default API;
