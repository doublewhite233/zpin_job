import axios from 'axios';

export function request (config) {
  const instance = axios.create({
    baseURL: ' http://10.222.0.208:4000',
    timeout: 10000
  });
  return instance(config);
}
