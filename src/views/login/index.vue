<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar"   title="登录"/>
    <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="user.mobile"
      name="手机号"
      placeholder="请输入手机号"
      :rules="[{ required: true, message: '请填写用户名' }]"
    ><i slot="left-icon" class="iconfont icon-shouji"></i></van-field>
    <van-field
      v-model="user.code"
      name="验证码"
      placeholder="请输入验证码"
      :rules="[{ required: true, message: '请填写密码' }]"
    ><i slot="left-icon" class="iconfont icon-yanzhengma"></i>
    <template #button>
    <van-button class="send-sms-btn" round size="small" type="primary">发送验证码</van-button>
  </template></van-field>
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button class="logn-button"  block type="primary" native-type="submit" >
      登录
    </van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async  onSubmit () {
      const user = this.user
      try {
        const res = await login(user)
        console.log('登录成功', res)
      } catch (err) {
        console.log('登录失败', err)
      }
    }
  }

}
</script>

<style lang="less">
.van-nav-bar{
  background-color: blue;
}
.iconfont{
  font-size: 27px;
}
.send-sms-btn{
  background-color: #ededed;
  border: none;
  color: #666;
}
.logn-button{
  background-color: blue;
}
</style>
