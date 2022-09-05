<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar"   title="登录">
      <van-icon name="cross" slot="left" @click="$router.back()" />
    </van-nav-bar>
    <van-form @submit="onSubmit" ref="LoginForm">
  <van-cell-group inset>
    <van-field
      v-model="user.mobile"
      name="mobile"
      placeholder="请输入手机号"
      :rules="userFormrules.mobile"
      type="number"
      maxlength='11'
    ><i slot="left-icon" class="iconfont icon-shouji"></i></van-field>
    <van-field
      v-model="user.code"
      name="code"
      placeholder="请输入验证码"
      :rules="userFormrules.code"
      type="number"
      maxlength='4'
    ><i slot="left-icon" class="iconfont icon-yanzhengma"></i>
    <template #button>
      <van-count-down
      :time="1000*10" format="ss s"
      v-if="isCountDownShow"
      @finish = 'isCountDownShow = false'/>
    <van-button
    v-else
    class="send-sms-btn"
    round size="small"
    type="primary"
    native-type="button"
    @click="onSendSms"
    >发送验证码</van-button>
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
import { login, sendSms } from '@/api/user'
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
      },
      isCountDownShow: false
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
        const { data } = await login(user)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败')
        }
      }
    },
    async  onSendSms () {
      try {
        await this.$refs.LoginForm.validate('mobile')
      } catch (err) {
        if (err) {
          return console.log('失败')
        }
      }
      try {
        await sendSms(this.user.mobile)
        this.isCountDownShow = true
        console.log('发送成功')
      } catch (err) {
        this.isCountDownShow = false
        console.log(err)
        if (err.response.status === 400) {
          this.$toast('发送太频繁就，请稍后重试')
        } else {
          this.$toast('发送失败')
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
.van-nav-bar .van-icon{
        color: #fff;
    }
</style>
