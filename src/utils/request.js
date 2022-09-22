import axios from 'axios'

const exceptionMessage = {
  1000: '用户名或者密码发生错误',
  3000: ''
}

import { Message } from 'element-ui';

import store from "../store";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// Add a request interceptor
service.interceptors.request.use(function (config) {
  const token = store.getters.token
  if (token) config.headers.authorization = "Bearer " + token
  return config;
}, function (error) {
  return Promise.reject(error);
});


// Add a response interceptor
service.interceptors.response.use(function (response) {
  console.log("--", response.data.data);
  if (response.status < 400) {
    return response.data.data
  }
  if (response.status === 401) {
    return
  }
  _showError(response.data.code, response.data.message)

  return response;
}, function (error) {
  return Promise.reject(error);
});

const _showError = (errorCode, message) => {
  let title
  title = exceptionMessage[errorCode] || message || '发生未知错误'
  Message.error(title)
}

const request = (options) => {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || options.params
    delete options.data
  }
  service.defaults.baseURL = options.proxy || process.env.VUE_APP_BASE_API
  return service(options)
}

export default request