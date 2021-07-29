import http from "./index";
// 注意：post请求参数放在data里面，get请求参数放在params里。
// export const login = userInfo => { return http.post(`/user/login?`).then((data) => { console.log(data) }) }
export const loginApi = data => {
  return http({
    url: "/user/login",
    method: "post",
    data: data
  }).then(res=>console.log(res))
}

// export const testApi = ()=>{
//   return http.get(`/yan/gc.php`).then(res=>{console.log(res)})
// }