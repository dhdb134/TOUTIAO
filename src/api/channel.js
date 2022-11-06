import request from '@/utile/request'

// 添加用户频道
export const addUserChannel = channel => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/channels',
    data: {
      channels: [channel]
    }
  })
}
// 删除指定频道
export const deleteUserChannel = channelID => {
  return request({
    method: 'delete',
    url: `/app/v1_0/user/channels/${channelID}`
  })
}
