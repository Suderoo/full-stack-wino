import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/odmiany";

export const listOdmiany = () => axios.get(REST_API_BASE_URL);

export const createOdmiana = (odmiana) => axios.post(REST_API_BASE_URL, odmiana);

export const getOdmiana = (odmianaId) => axios.get(`${REST_API_BASE_URL}/${odmianaId}`);

export const updateOdmiana = (odmianaId, odmiana) => axios.put(`${REST_API_BASE_URL}/${odmianaId}`, odmiana);

export const deleteOdmiana = (odmianaId) => axios.delete(`${REST_API_BASE_URL}/${odmianaId}`);
