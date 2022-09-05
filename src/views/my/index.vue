<template>
    <div class="My-container">
      <div  class = "header not-login">
        <div class="login-btn" @click="$router.push('/login')">
          <img class="mobile-img" src="~@/assets/手机 (1).svg" >
          <span class="text">登录 / 注册</span>
        </div>
      </div>
      <div class="header user-info">
        <div class="base-info">
          <div class="left">
            <van-image class="avatar" round fit="cover"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <span class="name">肖雄翔</span>
          </div>
          <div class="right">
            <van-button size="mini" round>编辑资料</van-button>
          </div>
        </div>
        <div class="data-stats">
          <div class="data-item">
            <span class="count">10</span>
            <span class="text">头疼</span>
          </div>
          <div class="data-item">
            <span class="count">10</span>
            <span class="text">头疼</span>
          </div>
          <div class="data-item">
            <span class="count">10</span>
            <span class="text">头疼</span>
          </div>
          <div class="data-item">
            <span class="count">10</span>
            <span class="text">头疼</span>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
    }
  }
}
</script>

  <style lang="less" scoped>
    .My-container{
      .header{
        height: 361px;
        background-color: rgb(76, 184, 235);
        background-size: cover;
      }
      .not-login{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .login-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .mobile-img{
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text{
        font-size: 28px;
        color: #fff;
      }
      .base-info{
        height: 231px;
        padding:76px 32px 32px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
          display: flex;
          align-items: center;
          .avatar{
            width: 132px;
            height: 132px;
            margin-right: 23px;
          }
          .name{
            font-size: 30px;
            color: #fff;
          }
        }
      }
        .data-stats{
           background-color: #ccc;
           display: flex;
          .data-item {
            height: 130px;
            flex : 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
    }
  }
 </style>
