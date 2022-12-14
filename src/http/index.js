import axios from "axios";
import store from '../store'

const http = axios.create({
  baseURL: "https://localhost:44354/v1/"
});

http.interceptors.request.use(
  //função para caso de sucesso
  function(config) {
    const token = store.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  //função para caso de erro
  function(erro) {
    return Promise.reject(erro);
  }
);

export default http;
