import axios from "axios";

axios.defaults.baseURL = "/api"; // 设置基础路径    所有接口路径前面都会加上 baseURL
axios.defaults.timeout = 10000; // 设置超时时间    默认时间单位是毫秒ms
axios.defaults.withCredentials = true; // 是否允许带cookie
// 设置头部信息
// axios.defaults.headers = {
//   "X-Requested-With": "XMLHttpRequest",
//   "Content-Type": "application/json; charset=UTF-8"
// };
axios.defaults.retry = 4; // 设置重连次数
axios.defaults.retryDelay = 5000; // 设置重连见个时间 单位是毫秒ms

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么

    // 如做国际化   需要在头部设置字段locale
    // 设置本地语言
    config.headers["locale"] = "zh";

    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response;
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);

export default axios;
