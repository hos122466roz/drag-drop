import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://chocolate-charity.liara.run/api/v1/",
});

export default instance;
