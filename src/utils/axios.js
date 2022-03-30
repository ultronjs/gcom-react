import axios from 'axios'

localStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhMjU5MWVlMC1mMzM4LTQ3NTItYTgxMi03NmFlOGY2ODg2MzciLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._d2ul037FUeEO14s9dI9zS26QKJ6tzggYc1Og_n2pX4"
);
const encodedToken = localStorage.getItem('token')

export const publicInstance = axios.create({
  baseURL: '/api/',
  timeout: 1000,
  headers: {'Accept': '*/*'}
});

export const privateInstance = axios.create({
  baseURL: '/api/',
  timeout: 1000,
  headers: {'Accept': '*/*',authorization: encodedToken}
});