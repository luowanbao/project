import axios from 'axios';
import { BASE_URL } from './common'
import { getToken } from './auth'

//这个可以查看Api文档
const instance = axios.create({
    baseURL: BASE_URL,  //接口域名
    timeout: 5000,  //请求超时时间
});


instance.interceptors.request.use(function (config) {
    if (getToken()) {
        config.headers.authorization = "Bearer " + getToken();
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});


//封装一个get请求
export const get = (url, params) => instance.get(url, { params })

//封装一个post请求
export const post = (url, data) => instance.post(url, data)

//delete请求
export const deletes = (url, data) => instance.delete(url, data)

// put请求

export const put = (url, params)=>instance.put(url,  params )
