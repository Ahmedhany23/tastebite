import axios from "axios";

const api = axios.create({
  baseURL: "https://api.edamam.com",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    app_id: import.meta.env.VITE_APP_ID,
    app_key: import.meta.env.VITE_API_KEY,
  },
});

export default api;
