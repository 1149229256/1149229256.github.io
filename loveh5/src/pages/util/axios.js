import axios from "axios";

export const axiosMethod = (type, url, body, header) => {
    let result = axios({
        method: type,
        url,
        data: body,
        headers: header
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