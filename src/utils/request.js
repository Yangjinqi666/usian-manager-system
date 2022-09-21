import axios from 'axios'

const service=axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
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

const request=(options)=>{
  options.method=options.method||'get'
  if(options.method.toLowerCase()==='get'){
    options.params=options.data || options.params
    delete options.data
  }

  service.defaults.baseURL=options.proxy||process.env.VUE_APP_BASE_API

  console.log(options);
  return service(options)
}

export default request