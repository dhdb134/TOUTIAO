<template>
    <div class="search-contaniner">
<!-- 顶部搜索栏 -->
<!-- Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。 -->
<form action="/">
  <van-search
    v-model="searchText"
    show-action
    placeholder="请输入搜索关键词"
    shape="round"
  background="#3296fa"
    @search="onSearch"
    @cancel="onCancel"
    @focus="isResultShow = false"
  />
</form>
<!-- /顶部搜索栏 -->

<!-- 历史记录 -->
<search-result v-if="isResultShow"/>
<!-- /历史记录 -->

<!-- 联想建议 -->
<search-suggestion v-else-if="searchText"/>
<!-- /联想建议 -->

<!-- 搜索历史记录 -->
<search-history v-else />
<!-- /搜索历史记录 -->
    </div>
  </template>

<script>
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
      isResultShow: false // 控制搜索结果展示
    }
  },
  methods: {
    onSearch (val) {
      console.log(val)
      this.isResultShow = true
    },
    onCancel () {
      console.log('onCancel')
      this.$router.back()
    }
  }
}

</script>

  <style lang="less" scoped>
  .search-contaniner{
    .van-search__action{
        color: #fff;
    }
  }
  </style>
