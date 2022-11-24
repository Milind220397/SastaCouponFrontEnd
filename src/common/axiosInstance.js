import axios from 'axios';
import { BACKEND_BASE_URL, SESSION_STORAGE_KEY } from '../constants/Constants';

const authHeader = () => {
  let user;
  const userData = localStorage.getItem(SESSION_STORAGE_KEY);
  if (userData !== null) {
    user = JSON.parse(userData);
  } else {
    user = {};
  }
  if (user && user.tokenData) {
    return user.token;
  } else {
    return '';
  }
}

const axiosClient = axios.create({

  baseURL: BACKEND_BASE_URL
});

export default axiosClient;
