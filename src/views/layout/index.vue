<template>
  <div class="layout-container">
    <router-view />
    <van-tabbar v-model="active" class="layout-tabbar">
  <van-tabbar-item ><i slot="icon" class="iconfont icon-shouye"></i><span class="text">首页</span></van-tabbar-item>
  <van-tabbar-item ><i slot="icon" class="iconfont icon-wenda"></i><span class="text">问答</span></van-tabbar-item>
  <van-tabbar-item ><i slot="icon" class="iconfont icon-shipin"></i><span class="text">视频</span></van-tabbar-item>
  <van-tabbar-item ><i slot="icon" class="iconfont icon-wode"></i><span class="text">我的</span></van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created: {},
  mounted: {},
  methods: {}
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
