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
