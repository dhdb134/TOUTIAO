<template>
  <div class="layout-container">
    <router-view />
    <!-- route 开启路由模式 -->
    <van-tabbar v-model="active" class="layout-tabbar" route>
  <van-tabbar-item to="/" ><i slot="icon" class="iconfont icon-shouye"></i><span class="text">首页</span></van-tabbar-item>
  <van-tabbar-item to="/question" ><i slot="icon" class="iconfont icon-wenda"></i><span class="text">问答</span></van-tabbar-item>
  <van-tabbar-item  to="/video"><i slot="icon" class="iconfont icon-shipin"></i><span class="text">视频</span></van-tabbar-item>
  <van-tabbar-item  to="/my"><i slot="icon" class="iconfont icon-wode"></i><span class="text">{{$store.state.user ? '我的' : '未登录'}}</span></van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  props: {},
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
    .layout-container{
        .layout-tabbar{
            i.iconfont{
                font-size: 40px;
            }
            span.text{
                font-size: 20px;
            }
        }
    }

</style>>
