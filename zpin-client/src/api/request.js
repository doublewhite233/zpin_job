import axios from 'axios';

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:4000',
    timeout: 10000
  });
  return instance(config);
}
