//axios
import axios from "axios";
import { Message } from "element-ui";
import {getToken} from '@/utils/auth'

//1.创建axios的实例
const instance = axios.create({
    baseURL: 'localhost:8080',
    timeout: 5000
})

//请求拦截器
//请求拦截器很难到err的
instance.interceptors.request.use(config => {
    getToken(config.token)
    return config
},err => {
    return Promise.reject(err);
})

//响应拦截器
//加入判断条件
instance.interceptors.response.use(response => {
    // console.log(response);
    if(response.status === 200) {
        const res =response.data
        
        if (res.success) {
            return res
            //顺便存一个token
            
        }else{
            //不放行
            Message( {
                // showClose: true,
                showClose: true,
                message: res.message || '错了哦，这是一条错误消息',
                type: 'error',
                center:true
            })
            //Promise了一个错误，所以不需要err
            return Promise.reject(new Error(res.message || '错了哦，这是一条错误消息'))
        }
    }
}
// ,error => {
//     Message( {
//         // showClose: true,
//         showClose: true,
//         message: error.message || '错了哦，这是一条错误消息',
//         type: 'error',
//         center:true
//     })
//     return Promise.reject(new Error(error.message || '错了哦，这是一条错误消息'))
// }
)
export default instance //导出实例
