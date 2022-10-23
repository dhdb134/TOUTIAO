<template>
  <div class="article-list">
    <van-pull-refresh
    v-model="isreFreshLoading"
    success-text="刷新成功"
    success-duration="1500"
     @refresh="onRefresh">
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  :error.sync="error"
  error-text="请求失败，点击重新加载"
  @load="onLoad"
>
 <AirticItem v-for="(airticle,index) in list"
  :key="index"
  :airticle="airticle"
  />
  // <!-- <van-cell
  // v-for="(airticle,index) in list"
  // :key="index"
  // :title="airticle.title" /> -->
</van-list>
</van-pull-refresh>
  </div>
</template>

<script>
import AirticItem from '@/components/airtic-item/'
import axios from 'axios'
export default {
  name: 'Airticle-List ',
  components: { AirticItem },
  props: {
    channel: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      list: [], // chu储存列表数据的数组
      loading: false, // 控制加载loading的状态
      finished: false, // 控制数据加载结束状态
      timestamp: null, // 请求获取下一页数据的时间戳
      error: false, // 控制列表加载失败提示状态
      isreFreshLoading: false, // 控制下了刷新的loading
      refreshSuccessText: '刷新成功' // 下拉刷新成功提示文本
    }
  },
  methods: {
    async onLoad () {
      try {
      // 1.请求获取数据
        const { data } = await axios({
          method: 'GET',
          url: 'http://127.0.0.1:3000/airticlist',
          params: {
            channel_id: this.channel.id, // 频道id
            // timestamp简单理解就是请求数据的页码.
            // 请求数据的第一页：当前最新事件戳
            // 用于请求之后数据的时间戳会在当前请求结果中返回给你
            timestamp: this.timestamp || Date.now(),
            with_top: 1 // 是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含置顶
          }
        })
        // if (Math.random() > 0.5) {
        //   JSON.parse('SDFDS') // 测试报错
        // }
        // 2.把请求数据放到list数组中
        const { results } = data.data
        // 数组的展开操作符 ... ，它会把数组元素一个一个拿出来
        this.list.push(...results)

        // 3.本次数据加载结束之后要把加载状态设置为结束
        this.loading = false
        // 4.判断数据是否加载完成
        if (results.length) {
        // 更新获取下一页的时间戳
          this.timestamp = data.data.pre_timestamp
        } else {
        // 没有数据了将finshed设置为true,不再load加载更多
          this.finished = true
        }
      } catch (err) {
        // 展示错误提示状态
        this.error = true
        // 请求失败 loading也需要关闭
        this.loading = false
      }
    },
    // 当下拉刷新的时候会触发调用该函数
    async onRefresh () {
      try {
        // 1.请求获取数据
        const { data } = await axios({
          method: 'GET',
          url: 'http://127.0.0.1:3000/airticlist',
          params: {
            channel_id: this.channel.id, // 频道id
            // timestamp简单理解就是请求数据的页码.
            // 请求数据的第一页：当前最新事件戳
            // 用于请求之后数据的时间戳会在当前请求结果中返回给你
            timestamp: this.timestamp || Date.now(),
            with_top: 1 // 是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含置顶
          }
        })
        // 2.将数据追加到列表顶部
        const { results } = data.data
        this.list.unshift(...results)
        //  拿到数据后，关闭下拉刷新的loading状态
        this.isreFreshLoading = false
        // 更新下拉成功提示文本
        this.refreshSuccessText = `刷新成功，更新了${results.length}条数据`
      } catch (err) {
        this.refreshSuccessText = '刷新失败'
      }
    }
  }
}

</script>

<style>

</style>
