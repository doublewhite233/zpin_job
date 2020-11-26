import { combineReducers } from 'redux';

function login (state=0, action) {
  return state, action;
}

function register (state=0, action) {
  return state, action;
}

export default combineReducers({
  login,
  register
});
