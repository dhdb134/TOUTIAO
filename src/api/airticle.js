// 文章请求模块
import request from '@/utile/request'

// 请求获取数据文章列表
export const getAirticles = (params) => {
  return request({
    method: 'GET',
    url: '/app',
    params: params
  })
}
