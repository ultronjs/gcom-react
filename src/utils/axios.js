import axios from 'axios'
export const publicInstance = axios.create({
  baseURL: '/api/',
  timeout: 1000,
  headers: {'Accept': '*/*'}
});

publicInstance.interceptors.request.use(async req => {
  console.log("intercerper",req)
  return req
})
publicInstance.interceptors.response.use(async (res) => {
  console.log("intercerper response", res);
  return res;
});
export const privateInstance = axios.create({
  baseURL: "/api/",
  timeout: 1000,
  headers: { Accept: "*/*", authorization: localStorage.getItem("token") },
});
privateInstance.interceptors.request.use(async (req) => {
  console.log("intercerper", req);
  return req;
});
privateInstance.interceptors.response.use(async (res) => {
  console.log("intercerper response", res);
  return res;
});