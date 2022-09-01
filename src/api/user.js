import request from '@/utile/request'

export const login = data => {
  return request({
    methods: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
