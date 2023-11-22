import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/seafood',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchData = async (url) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for the calling code to handle
  }
};

export const getSeafood = async () => {
  return fetchData('/');
};

export const getSeafoodById = async (id) => {
  await delay(1000);
  return fetchData(`/${id}`);
};

export const getFilteredSeafood = async (type, country) => {
  return fetchData(`/filters/${type}&${country}`);
};
