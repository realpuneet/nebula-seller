import axios from "axios";
import { store } from "../store/store";
import { setError } from "../store/features/errorSlice";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // send cookies with requests
});

axios.interceptors.response.use(
    (response) => response,
    (error) =>{
        let errorMsg = error.response?.data?.message;
        store.dispatch(setError(errorMsg));
        return Promise.reject(error);
    }
)