import axios from 'axios';

export function request (config) {
  const instance = axios.create({
    baseURL: ' http://192.168.82.80:4000',
    timeout: 10000
  });
  return instance(config);
}
