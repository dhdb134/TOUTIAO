import store from '@/store'
import request from '@/utile/request'

export const login = data => {
  return request({
    methods: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
export const sendSms = mobile => {
  return request({
    methods: 'GET',
    url: `/app/v1_0/codes/${mobile}`
  })
}
export const getUserInfo = () => {
  return request({
    methods: 'GET',
    url: '/app/v1_0/codes/user',
    headers: {
      Authorizations: `Bearer ${store.state.user.token}`
    }
  })
}
export const getUserChannel = () => {
  return request({
    methods: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
