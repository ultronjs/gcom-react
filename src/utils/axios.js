import axios from 'axios'
export const publicInstance = axios.create({
  baseURL: '/api/',
  timeout: 1000,
  headers: {'Accept': '*/*'}
});

publicInstance.interceptors.request.use(req=>{
  console.log("request",req)
  return req
})
publicInstance.interceptors.response.use((res) => {
  console.log("response", res);
  return res;
});


