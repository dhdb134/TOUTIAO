<template>
    <div class="search-contaniner">
<!-- 顶部搜索栏 -->
<!-- Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。 -->
<form action="/" class="search-from">
  <van-search
    v-model="searchText"
    show-action
    placeholder="请输入搜索关键词"
    background="#3296fa"
    @search="onSearch"
    @cancel="onCancel"
    @focus="isResultShow = false"
  > </van-search>
</form>
<!-- /顶部搜索栏 -->

<!-- 搜索结果 -->
<search-result v-if="isResultShow"
:serach-text="searchText"/>
<!-- /搜索结果 -->

<!-- 联想建议 -->
<search-suggestion
 v-else-if="searchText"
 :search-text="searchText"
 @search="onSearch"
 />
<!-- /联想建议 -->

<!-- 搜索历史记录 -->
<search-history v-else
:search-history="searchHistory"
@empty="searchHistory= []"
@search="onSearch"/>
<!-- /搜索历史记录 -->
    </div>
  </template>

<script>
import { setItem, getItem } from '@/utile/storge'
import SearchHistory from './components/search-history.vue'
import SearchSuggestion from './components/search-suggestion.vue'
import SearchResult from './components/search-result.vue'
export default {
  name: 'SearchIndex',
  components: {
    SearchHistory,
    SearchResult,
    SearchSuggestion
  },
  props: {},
  data () {
    return {
      searchText: '',
      isResultShow: false, // 控制搜索结果展示
      searchHistory: getItem('TOUTIAO_SEARCH_HISTORY') || [] // 存储搜索历史
    }
  },
  methods: {
    onSearch (val) {
      // 更新搜索文本内容
      this.searchText = val
      // 存储搜索历史记录
      // 要求1.不要有重复的历史记录 2.最新的排在最前面
      const index = this.searchHistory.indexOf(val)
      if (index !== -1) {
        this.searchHistory.splice(index, 1)
      }
      this.searchHistory.unshift(val)
      // 渲染搜索结果
      this.isResultShow = true
    },
    onCancel () {
      console.log('onCancel')
      this.$router.back()
    }
  },
  watch: {
    searchHistory (value) {
      setItem('TOUTIAO_SEARCH_HISTORY', value)
    }
  }
}

</script>

  <style lang="less" scoped>
   .search-contaniner{
    padding-top: 108px;
    .van-search__action{
        color: #fff;
    }
    /deep/.search-from{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      right: 0;
      .van-field__clear{
        padding-left: 30px;
        z-index: 2;
      }
    }
  }
  </style>
