import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/seafood',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getSeafood() {
    return (await instance.get()).data;
}

export async function getSeafoodById(id) {
    await delay(3000);
    return (await instance.get(`/${id}`)).data;
}

export async function getFilteredSeafood(type, country) {
    return (await instance.get(`/filters/${type}&${country}`)).data;
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}