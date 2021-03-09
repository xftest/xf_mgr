import axios from 'axios';
/**
 * axios 基于promise
 * ajax 基于XMLhttpRequest
 */
export const add = (form) => {
  return axios.post('http://localhost:3000/books/add', form);
};

export const list = () => {
  return axios.get('http://localhost:3000/books/list');
};
