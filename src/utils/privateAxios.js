import axios from "axios";
export const privateInstance = axios.create({
  baseURL: "/api/",
  timeout: 1000,
  headers: { Accept: "*/*", authorization: localStorage.getItem("token") },
});
privateInstance.interceptors.request.use((req) => {
  console.log("request", req, localStorage.getItem("token"));
  return req;
});
privateInstance.interceptors.response.use((res) => {
  console.log("response", res);
  return res;
});
