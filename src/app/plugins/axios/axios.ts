import axios from "axios"

import { handleError, handleRequest, handleResponse } from "./interceptors"

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL
})

axiosInstance.interceptors.request.use(handleRequest, handleError)

axiosInstance.interceptors.response.use(handleResponse, handleError)
