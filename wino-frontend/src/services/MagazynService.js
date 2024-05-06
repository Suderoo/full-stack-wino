import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/magazyny";

export const listMagazyny = () => axios.get(REST_API_BASE_URL);

export const createMagazyn = (magazyn) => axios.post(REST_API_BASE_URL, magazyn);

export const getMagazyn = (magazynId) => axios.get(REST_API_BASE_URL + '/' + magazynId);

export const updateMagazyn = (magazynId, magazyn) => axios.put(REST_API_BASE_URL + '/' + magazynId, magazyn);

export const deleteMagazyn = (magazynId) => axios.delete(REST_API_BASE_URL + '/' + magazynId);
