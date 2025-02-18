import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000", // todas as requisições feitas com esse axios terão essa url como base
})