import axios from 'axios'

const service=axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout:5000
})

// Add a request interceptor
service.interceptors.request.use(function (config) {

  return config;
}, function (error) {

  return Promise.reject(error);
});


// Add a response interceptor
service.interceptors.response.use(function (response) {

  return response;
}, function (error) {

  return Promise.reject(error);
});

export default service