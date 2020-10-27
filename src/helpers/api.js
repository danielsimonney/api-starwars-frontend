import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeOut: 1000,
  headers: { Accept: "application/json" }
});

export const loadAuthorisationHeader = () => ({
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
});
