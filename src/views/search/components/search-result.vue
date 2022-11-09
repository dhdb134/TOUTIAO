<template>
    <div class="search-result">
        <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  :error="error"
  error-text="加载失败，请点击重试"
  class="airticl-list"
>
  <van-cell v-for="(airticle, index) in list" :key="index" :title="airticle.title" />
</van-list>

    </div>
  </template>

<script>
import { getSearchResult } from '@/api/search'
export default {
  name: 'SearchResult',
  components: {},
  props: {
    searchText: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      per_page: 20,
      error: false

    }
  },
  methods: {
    async onLoad () {
      try {
        // 1. 请求数据
        const { data } = await getSearchResult({
          page: this.page, // 页码
          per_page: this.per_page, // 每页大小
          q: this.searchText // 查询关键词
        })
        // 2. 降数据添加到列表中
        const { results } = data.data
        this.list.push(...results)
        // 3. 将本次加载的loading关闭
        this.loading = false
        // 4.判断是否还有数据
        if (results.length) {
          // 如果有，则更新获取下一个数据页码
          this.page++
        } else {
          // 如果没有，则将加载状态 finished 设置为结束
          this.finished = true
        }
      } catch (err) {
        // 展示加载失败状态
        this.error = true
        // 请求失败 LOADING 也要关闭
        this.loading = false
      }
    }
  }
}

</script>

  <style lang="less" scoped>
 /deep/.airticl-list{
  height: 20rem;
  overflow: auto;
 }
  </style>
