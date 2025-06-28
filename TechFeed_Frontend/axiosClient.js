import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5173/api", 
});

export default axiosClient;
