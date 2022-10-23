<template>
    <div class="Home-container">
      <van-nav-bar class="page-nav-bar" fixed >
        <van-button
        slot="title"
        class="btn-search"
        type="info"
        size="small"
        round
        ><van-icon name="search" color="#fff" size="18" /> 搜索</van-button>
    </van-nav-bar>
    <!--
      通过v-model='active' 绑定当前激活标签对应的索引值
      通过animated属性可以开启切换标签内容时的专场画面
      通过swipeable属性可以滑动切换标签页
     -->
    <van-tabs v-model="active" animated swipeable class="channel-tabs">
  <van-tab :title="channel.name" v-for="channel in channels" :key = "channel.id">
     <Airticlelist :channel = 'channel'/> </van-tab>
  <div class="placeholder" slot="nav-right" ></div>
  <div class="hunber-btn" slot="nav-right">
    <i class="iconfont icon-liebiao"></i>
  </div>
</van-tabs>

    </div>
  </template>

<script>
import { getUserChannel } from '@/api/user'
import Airticlelist from './components/airticle-list.vue'

export default {
  name: 'HomeIndex',
  components: {
    Airticlelist
  },
  props: {},
  data () {
    return {
      channels: [],
      active: 0
    }
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
  },
  created () {
    this.loadChannles()
  }

}
</script>

  <style lang="less" scoped>
  .article-list{
  height: 79vh;
  overflow-y: auto;
  }
    .Home-container{
      padding-top: 174px;
      padding-bottom: 100px;
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
        position: fixed;
    top: 88px;
    left: 0;
    right: 0;

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
      .van-tabs__nav{
        padding-bottom: 0 ;
      }
      .van-tabs__line{
        bottom: 8px;
        width: 31px  !important;
        height: 6px;
        background-color: #3296fa;
      }
      .placeholder{
        width: 66px;
        height: 82px;
        flex-shrink: 0;
      }
      .hunber-btn{
        position: fixed;
        right: -20px;
        width: 66px;
        height: 82px;
        line-height: 75 px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        opacity: 0.902;
        i.iconfont{
          font-size: 33px;
        }
      }
    }
  }
  </style>
