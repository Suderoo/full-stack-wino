import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/wina';

export const listWina = () => axios.get(REST_API_BASE_URL);

export const createWino = (wino) => axios.post(REST_API_BASE_URL, wino);

export const getWino = (winoId) => axios.get(REST_API_BASE_URL + '/' + winoId);

export const updateWino = (winoId, wino) => axios.put(REST_API_BASE_URL + '/' + winoId, wino);

export const deleteWino = (winoId) => axios.delete(REST_API_BASE_URL + '/' + winoId);
