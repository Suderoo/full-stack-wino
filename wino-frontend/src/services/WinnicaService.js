import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/winnice";

export const listWinnice = () => axios.get(REST_API_BASE_URL);

export const createWinnica = (winnica) => axios.post(REST_API_BASE_URL, winnica);

export const getWinnica = (winnicaId) => axios.get(`${REST_API_BASE_URL}/${winnicaId}`);

export const updateWinnica = (winnicaId, winnica) => axios.put(`${REST_API_BASE_URL}/${winnicaId}`, winnica);

export const deleteWinnica = (winnicaId) => axios.delete(`${REST_API_BASE_URL}/${winnicaId}`);
