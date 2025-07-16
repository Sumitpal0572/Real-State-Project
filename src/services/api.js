import axios from 'axios';

const API = axios.create({
    baseURL: 'https://dummyjson.com/'
});

export const fetchProperties = async () => {
    const res = await API.get('/products?limit=20');
    return res.data.products;
};