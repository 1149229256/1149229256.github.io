import axios from "axios";

const protocol = window.location.protocol;
const host = window.location.host;

window.BasicProxy = "http://192.168.129.178:8889/" || protocol + "://" + host;

export const axiosMethod = (type, url, body, header) => {
    let result = axios({
        baseURL: 'http://192.168.129.178:8889/',
        method: type,
        url,
        params: type === "get"? body: {},
        data: type === "get"? {}: body,
        headers: {
            "Content-Type": type === "get"? "application/x-www-form-urlencoded": "application/json",
            ...header
        }
    })
    return result;
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});