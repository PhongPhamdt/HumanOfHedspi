import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
  baseURL: config.rootPath,
  withCredentials: true
});

export default axiosInstance;