import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: import.meta.env.REACT_APP_API_KEY, // API key is automatically included in every request
    },
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
