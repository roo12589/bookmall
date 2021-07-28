import axios from "axios"
const http = axios.create({
  baseURL: "localhost:8888",
  timeout: "6000"
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(
  // 对响应数据做点什么
  /*   let data = response.data;
    return data; */

    // 验证请求状态码
  response => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  }, error=>{
    // 对响应错误做点什么
    console.log(error+"响应出错 应加入ele message 网络请求失败，请刷新重试");
    return Promise.reject(error);
  });

export default http