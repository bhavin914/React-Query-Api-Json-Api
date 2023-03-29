import axios from "axios";

const baseURL = `https://6304ae4094b8c58fd722bcdf.mockapi.io/api/`;

const apiaxiosClient = axios.create({
  baseURL,
});

export default apiaxiosClient;
