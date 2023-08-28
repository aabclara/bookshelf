import axios from "axios";

export const api = axios.create({
    baseURL: "https://backbookshelf.onrender.com/register",
    headers: {
        Accept: 'application/json'
    }
})