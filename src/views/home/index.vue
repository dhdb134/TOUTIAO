<template>
    <div class="Home-container">
      <van-nav-bar class="page-nav-bar"  >
        <van-button
        slot="title"
        class="btn-search"
        type="info"
        size="small"
        round
        ><van-icon name="search" color="#fff" size="18" /> 搜索</van-button>
    </van-nav-bar>
    <van-tabs v-model="active" animated swipeable class="channel-tabs">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>

    </div>
  </template>

<script>
import { getUserChannel } from '@/api/user'
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {
      channels: [],
      active: 2
    }
  },
  created () {
    this.loadChannles()
  },
  methods: {
    async loadChannles () {
      try {
        const { data } = await getUserChannel()
        this.channels = data.data.channels
        console.log(data)
      } catch (err) {
        this.$toast('获取失败')
      }
    }
  }
}
</script>

  <style lang="less" scoped>
    .Home-container{
    .van-nav-bar__title{
          max-width: unset;
        }
      .page-nav-bar{
        background-color: blue;
    }
    .btn-search{
        font-size: 28px;
          width: 555px;
          height: 64px;
    }
    /deep/ .channel-tabs{
      .van-tabs__wrap{
        height: 82px;
      }
      .van-tab {
      min-width: 200px;
        height: 82px;
        border-right: 1px solid #edeff3;
        font-size: 30px;
        color: #777777;

      }
      .van-tab--active{
        color:#333333
      }
    }
  }
  </style>
