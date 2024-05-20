import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/pracownicy";

export const listPracownicy = () => axios.get(REST_API_BASE_URL);

export const createPracownik = (pracownik) => axios.post(REST_API_BASE_URL, pracownik);

export const getPracownik = (pracownikId) => axios.get(REST_API_BASE_URL + '/' + pracownikId);

export const updatePracownik = (pracownikId, pracownik) => axios.put(REST_API_BASE_URL + '/' + pracownikId, pracownik);

export const deletePracownik = (pracownikId) => axios.delete(REST_API_BASE_URL + '/' + pracownikId);