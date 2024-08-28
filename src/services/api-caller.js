import axios from "axios";
// import { getAccessToken } from "../helper/localStorage";

// const configRequest = async (config) => {
//   const access_token =
//     getAccessToken() || localStorage.getItem("access_token") || "";
//   if (access_token) config.headers["Authorization"] = `Bearer ${access_token}`;

//   return config;
// };

const responseResolve = (response) => {
  return response.data;
};

const responseReject = (error) => {
  return Promise.reject(error);
};


const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "content-text": "application/json",
  },
});

// axiosClient.interceptors.request.use(configRequest);

axiosClient.interceptors.response.use(responseResolve, responseReject);

export const axiosFormData = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "content-type": "multipart/form-data",
  },
});

// axiosFormData.interceptors.request.use(configRequest);

axiosFormData.interceptors.response.use(responseResolve, responseReject);

export default axiosClient;
