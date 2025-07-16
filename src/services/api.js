import axios from 'axios';

import data from '../data/realEstateData.json';

export const fetchProperties = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};