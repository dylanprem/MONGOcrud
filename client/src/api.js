const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.baseURL || "http://localhost:5000/"
});

module.exports = axiosInstance;
