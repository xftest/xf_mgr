import axios from 'axios';
/**
 * axios 基于promise
 * ajax 基于XMLhttpRequest
 */

export const register = (account, password,inviteCode) => {
  // return 一个promise回去， 接口就可以操作.then了。
  return axios.post('http://localhost:3000/auth/register', {
    account,
    password,
    inviteCode,
  });
};

export const login = (account, password) => {
  return axios.post('http://localhost:3000/auth/login', {
    account,
    password,
  });
};
