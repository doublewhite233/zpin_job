import { request } from './request';

export const reqRegister = (user) => {
  return request({
    url: '/register',
    method: 'post',
    data: { ...user }
  });
};

export const reqLogin = ({ username, password }) => {
  return request ({
    url: '/login',
    method: 'post',
    data: { username, password }
  });
};

export const reqUpdateUser = (user) => {
  return request({
    url: '/update',
    method: 'post',
    data: { ...user }
  });
};
