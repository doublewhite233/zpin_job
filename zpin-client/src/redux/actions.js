import { reqRegister, reqLogin } from '../api/login';
import { AUTH_SUCCESS,ERROR_MSG } from './action-types';

const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user });
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg });

export const register = (user) => {
  return async dispatch => {
    // 发送异步请求
    const res = await reqRegister(user);
    const data = res.data;
    if (data.code === 0) {
      dispatch(authSuccess(data.data));
    } else {
      dispatch(errorMsg((data.msg)));
    }
  };
};

export const login = (user) => {
  return async dispatch => {
    const res = await reqLogin(user);
    const data = res.data;
    if (data.code === 0) {
      dispatch(authSuccess(data.data));
    } else {
      dispatch(errorMsg(data.msg));
    }
  };
};
