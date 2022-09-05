<template>
    <div class="My-container">
      <div  class = "header not-login">
        <div class="login-btn" @click="$router.push('/login')">
          <img class="mobile-img" src="~@/assets/手机4.svg"  >
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
            <span class="text">头条</span>
          </div>
          <div class="data-item">
            <span class="count">10</span>
            <span class="text">关注</span>
          </div>
          <div class="data-item">
            <span class="count">10</span>
            <span class="text">粉丝</span>
          </div>
          <div class="data-item">
            <span class="count">10</span>
            <span class="text">获赞</span>
          </div>
        </div>
      </div>
      <van-grid :column-num="2" class="grid-nav" clickable>
  <van-grid-item class="grid-item" >
    <i slot="icon" class="iconfont icon-shoucang"></i>
    <span slot="text" class="text">收藏</span>
  </van-grid-item>
  <van-grid-item  class="grid-item" >
    <i slot="icon" class="iconfont icon-lishijilu"></i>
    <span slot="text" class="text">历史</span>
  </van-grid-item>
</van-grid>
<van-cell-group>
  <van-cell title="消息通知" is-link  class="van-cell"/>
  <van-cell title="小智同学" is-link class="van-cell"/>
  <van-cell title="退出登录" class="logout" />
</van-cell-group>
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
        background-color: #1296db;
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
        border-radius: 100%;
        width: 150px;
        height: 150px;
        margin-bottom: 15px;
        background-color: #fff;
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
            border: 0.4px solid #fff;
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
           display: flex;
          .data-item {
            height: 130px;
            flex : 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            .count{
              font-size: 36px;
            }
            .text{
              font-size: 23px;
            }
          }
    }
    .grid-nav{
      .grid-item{
        height: 141px;
        i.iconfont{
          font-size: 45px;
        }
        .icon-shoucang{
          color: #eb5253;
        }
        .icon-lishijilu{
          color: #ff9d1d;
        }
        span.text{
          font-size:28px;
          color: black;
        }
      }
    }
    .logout{
      text-align: center;
      color: #eb5253;
      font-size: large;
    }
    .van-cell{
      margin-bottom: 9px;
    }
  }
 </style>
