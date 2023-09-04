import axios from "axios";

export const api = axios.create({
    baseURL: "https://backbookshelf.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})