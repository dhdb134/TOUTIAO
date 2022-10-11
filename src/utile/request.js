import axios from 'axios'
import store from '@/store'
const request = axios.create({ baseUal: 'http://ttapi.resarch.itcast.cn/' }
)
export default request
// 请求拦截器
request.interceptors.request.use(function (config) {
// 在发送请求之前做些什么
// config配置对象： 本次请求的配置对象
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorizations = `Bearer ${user.token}`
  }

  // 注意：这里务必要返回config配置对象，否则请求就停在这里了
  return config
}, function (error) {
// 对请求错误做些什么(请求还没发出去)会进入这里
  return Promise.reject(error)
})
