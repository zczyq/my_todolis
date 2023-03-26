import axios from 'axios' 
const instance = axios.create({
    // baseURL: 'http://127.0.0.1/api',//部署在服务器上使用的baseUrl
    baseURL: '/api',//开发阶段使用代理的baseUrl
    timeout: 5000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// 配置请求拦截器
instance.interceptors.request.use(config=>{
    // 携带token
    return config
})
// 配置响应拦截器
instance.interceptors.response.use(
    // 我只要收到了重新登录的信息就重定向到登录页面
    response=>{
        return response.data
    },
    error=>{
        console.log(error.message);
    }
)

export default instance