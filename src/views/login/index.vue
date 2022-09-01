<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar"   title="登录"/>
    <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="user.mobile"
      name="手机号"
      placeholder="请输入手机号"
      :rules="userFormrules.mobile"
      type="number"
    ><i slot="left-icon" class="iconfont icon-shouji"></i></van-field>
    <van-field
      v-model="user.code"
      name="验证码"
      placeholder="请输入验证码"
      :rules="userFormrules.code"
      type="number"
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
      },
      userFormrules: {
        mobile: [
          {
            required: true,
            message: '手机不能为空'
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号码错误'
          }],
        code: [{
          required: true,
          message: '验证码不能为空'
        },
        {
          pattern: /^\d{4}$/,
          message: '验证码错误'
        }
        ]
      }
    }
  },
  methods: {
    async  onSubmit () {
      const user = this.user
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(user)
        console.log('登录成功', res)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.success('手机号或验证码错误')
        } else {
          this.$toast.success('登录失败')
        }
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
