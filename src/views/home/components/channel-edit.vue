<template>
<div class="channel-edit">
    <van-cell :border="false">
        <div slot="title" class="title-text">我的频道</div>
        <van-button
        class="edit-btn"
        type="danger"
        plain
        round
        size="mini"
        @click="isEdit = !isEdit"
        >编辑</van-button>
    </van-cell>
    <van-grid :gutter="10" class="my-grid">
  <van-grid-item
  class="grid-item"
   v-for=" channel in Mychannels"
   :key="channel.id"
   >
   <!--
    v-bind:class 语法：
    一个对象，对象中的key表示要作用的css类名
              对象中的value要计算出布尔值
              true,则作用该类名
              false,不作用该类名
-->
<van-icon
slot="icon"
name="clear"
v-show="isEdit"></van-icon>
   <span
   class="text"
   :class="{active: channel.id === active}"
   slot="text">{{channel.name}}</span>
  </van-grid-item>

</van-grid>

<!-- 频道推荐 -->
<van-cell :border="false">
        <div slot="title" class="title-text">频道推荐</div>
    </van-cell>
    <van-grid :gutter="10" class="recommend-grid">
  <van-grid-item
  class="grid-item"
   v-for="( channel, index ) in recommendChannels"
   :key="index"
   icon="plus"
   :text="channel.name"
   @click="onAddChannel(channel)"/>
</van-grid>

</div>
</template>

<script>
import { getAllchannels } from '@/api/user'
export default {
  name: 'ChannelEdit',
  props: {
    Mychannels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }

  },
  data () {
    return {
      allchannels: [], // 所有频道
      localMychannels: this.Mychannels, // 改变props里的值会影响父元素，会报错，所以定义一个变量接收props里的Mychannels
      isEdit: false // 控制编辑状态显示
    }
  },
  computed: {
    recommendChannels () {
      // 数组filter 方法 ：遍历数组把符合条件的元素储存到新数组中
      return this.allchannels.filter(channel => {
        // const channels = []
        // 数组find 方法： 遍历数组，把符合条件的第一个元素返回
        return !this.Mychannels.find(Mychannel => {
          return Mychannel.id === channel.id
        })
      })
    }
    // recommendChannels () {
    //   const channels = []
    //   this.allchannels.forEach(channel => {
    //     // find遍历数组,找到满足条件的元素项
    //     const result = this.Mychannels.find(Mychannels => {
    //       return Mychannels.id === channel.id
    //     })
    //     // 如果我的频道中不包括该频道选项，则收集到频道中
    //     if (!result) {
    //       channels.push(channel)
    //     }
    //   })
    //   return channels
    // }
  },
  created () {
    this.loadAllchannels()
  },
  methods: {
    async loadAllchannels () {
      try {
        const { data } = await getAllchannels()
        // const { data } = await axios({
        //   method: 'GET',
        //   url: 'http://127.0.0.1:3000/channels'

        // })
        this.allchannels = data.data.channels
      } catch (err) {
        this.$toast('数据接收失败')
      }
    },
    onAddChannel (channel) {
      this.localMychannels.push(channel)
    }
  }

}
</script>

<style lang="less" scoped>
.channel-edit{
    padding: 86px 0;
    .title-text{
        font-size: 32px;
        color:#333333
    }
    .edit-btn{
        width: 104px;
        height: 48px;
        font-size: 26px;
        color: #f85959;
        border: 1px solid #f85959;
    }
    /deep/.grid-item{
        width: 160px;
        height: 86px;
        .van-grid-item__content{
            white-space: nowrap;// 不让文字折行
            background-color: #f4f5f6;
            .van-grid-item__text,.text{
                font-size: 28px;
                color:#222;
                margin-top: 0;
            }
            .active{
                color: red;
            }
            .van-grid-item__icon-wrapper{
              position: unset;
            }
        }
    }
    /deep/.recommend-grid{
        .grid-item{
            .van-grid-item__content{
                flex-direction: row;
                .van-icon-plus{
                    font-size: 28px;
                }
            }
        }
    }
    /deep/.my-grid{
        .grid-item{
            .van-icon-clear{
                position: absolute;
                top: -10px;
    font-size: 30px;
    right: -10px;
    color: #caca;
    z-index: 2;
            }
        }
    }
}

</style>>
