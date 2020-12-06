import { reqRegister, reqLogin, reqUpdateUser } from '../api/login';
import { AUTH_SUCCESS,ERROR_MSG, RECEIVE_USER, RESET_USER } from './action-types';

const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user });
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg });
const receiveUser = (user) => ({ type: RECEIVE_USER, data: user });
const resetUser = (msg) =>({ type: RESET_USER, data: msg });

export const register = (user) => {
  const { username, password, passwordCon } = user;
  const type = user.usertype[0];
  if (username.trim().length === 0) {
    return errorMsg('用户名不能为空');
  } else if (password !== passwordCon) {
    return errorMsg('输入的密码不一致');
  } else if (password.trim().length < 6 || password.trim().length > 16) {
    return errorMsg('请输入6-16位密码');
  }
  return async dispatch => {
    // 发送异步请求
    const res = await reqRegister({ username, password, type });
    const data = res.data;
    if (data.code === 0) {
      dispatch(authSuccess(data.data));
    } else {
      dispatch(errorMsg((data.msg)));
    }
  };
};

export const login = (user) => {
  const { username, password } = user;
  if (username.trim().length === 0) {
    return errorMsg('用户名不能为空');
  } else if (password.trim().length < 6 || password.trim().length > 16) {
    return errorMsg('请输入6-16位密码');
  }
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

export const updateUser = (user) => {
  return async dispatch => {
    const response = await reqUpdateUser(user);
    const res = response.data;
    if (res.code === 0) {
      dispatch(receiveUser(res.data));
    } else {
      dispatch(resetUser(res.msg));
    }
  };
};
