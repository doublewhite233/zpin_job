import axios from 'axios';

export function request (config) {
  const instance = axios.create({
    baseURL: ' http://192.168.43.110:4000',
    timeout: 10000
  });
  return instance(config);
}
