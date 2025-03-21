import axios from 'axios';
import {baseURL, headers} from '@/networking/config';
import {resInterceptor} from '@/networking/interceptors';

const client = axios.create({
  baseURL,
  headers,
});

client.interceptors.response.use(
  resInterceptor.onFulfill,
  resInterceptor.onReject,
);

export const networkService = {
  setAccessToken(token) {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  clearAccessToken() {
    delete client.defaults.headers.common['Authorization'];
  },
  request({method, url, data, ...config}) {
    return client.request({method, url, data, ...config});
  },
};


