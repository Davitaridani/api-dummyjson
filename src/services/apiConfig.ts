import axios from "axios";

export const intanceAxios = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000
})

