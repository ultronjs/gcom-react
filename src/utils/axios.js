import axios from 'axios'

localStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJiNDZkMzcyYi01ZDJkLTRhNjAtODNlOC1lMzEzZTkxYTRmNDIiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.d7DAuEe7bDrPdYQPdJy5rMpa6wVldesI73X7UqpNtMg.eyJfaWQiOiI5Z…9tIn0.AMIt-GgDP-gpWEy9yCUD99QHYNMvbuR_ssQ4ZUxA7y8.eyJfaWQiOiI5ZmEyOWEzMS00ZDA3LTQyM2ItOWViMS1mODdlYTljMTUzNDIiLCJlbWFpbCI6InN3YXBuaWxiYW5zYWxAZ21haWwuY29tIn0.AMIt-GgDP-gpWEy9yCUD99QHYNMvbuR_ssQ4ZUxA7y8.eyJfaWQiOiI3NjRmMDUyOC1hOTI1LTQwYjEtOWQ5My01ZjlmMjA3ODc4MmIiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.Ad1Y2ugzBElbGO2ldP2t8ttwoJbJZmnRlvLgcBAofKI"
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