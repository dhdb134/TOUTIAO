<template>
    <div class="Home-container">
      <van-nav-bar class="page-nav-bar" fixed>
        <van-button
        slot="title"
        class="btn-search"
        type="info"
        size="small"
        round
        to="/search"
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
  <div class="hunber-btn" slot="nav-right" @click="isChannelEditShow= true">
    <i class="iconfont icon-liebiao"></i>
  </div>
</van-tabs>
<van-popup
  v-model="isChannelEditShow"
  closeable
  close-icon-position="top-left"
  position="bottom"
  :style="{ height: '100%' }"
>
<channel-edit
 :Mychannels="channels"
 :active="active"
 @update-active="onUpdateActive"  />
</van-popup>

    </div>
  </template>

<script>
import { getItem } from '@/utile/storge'
import { mapState } from 'vuex'
import ChannelEdit from './components/channel-edit.vue'
import { getUserChannel } from '@/api/user'
import Airticlelist from './components/airticle-list.vue'

export default {
  name: 'HomeIndex',
  components: {
    Airticlelist,
    ChannelEdit
  },
  props: {},
  computed: {
    ...mapState(['user'])
  },
  data () {
    return {
      channels: [],
      active: 0,
      isChannelEditShow: false
    }
  },
  methods: {
    async loadChannles () {
      try {
        // const { data } = await getUserChannel()
        // this.channels = data.data.channels
        let channels = []
        if (this.user) {
          // 已经登录，获取数据列表
          const { data } = await getUserChannel()
          channels = data.data.channels
        } else {
          // 未登录，判断是否本地有频道列表数据
          const localChannels = getItem('TOUTIAO_CHANNELS')
          // 如果有， 拿来用
          if (localChannels) {
            channels = localChannels
          } else {
            // 如果没有， 请求获取默认频道列表
            const { data } = await getUserChannel()
            channels = data.data.channels
          }
        }
        this.channels = channels
      } catch (err) {
        this.$toast('获取失败')
      }
    },
    onUpdateActive (index, isChannelEditShow = true) {
      // 更新激活的频道项
      this.active = index
      // 关闭编辑频道弹层
      this.isChannelEditShow = isChannelEditShow
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
        right: -10px;
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
