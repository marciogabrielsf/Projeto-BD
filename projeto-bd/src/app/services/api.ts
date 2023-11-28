import axios from "axios";

const API_URL = "http://192.168.0.108:5000";

const api = axios.create({
	baseURL: API_URL,
});

export default api;
