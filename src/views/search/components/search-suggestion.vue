<template>
    <div class="search-suggestion">
        <van-cell
          icon="search"
          v-for="(text, index) in suggestions"
          :key="index"
          @click="$emit('search', text)">
        <div slot="title" v-html="highlight(text)"></div>
        </van-cell>
          <!-- <div>{{htmlStr}}</div> 双花括号会绑定直接输出纯文本内容 -->
          <!-- 使用v-html指令可以绑定渲染带有HTML标签的字符串 -->
    </div>
  </template>

<script>
import { debounce } from 'lodash' // 按需加载好处： 只会把使用的成员打包到结果中
import { getSearchSuggestions } from '@/api/search'
export default {
  name: 'SearchSuggestion',
  props: {
    searchText: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      suggestions: [], // 联想建议数据列表
      htmlStr: 'Hello<span style="color:red">world</span>'
    }
  },
  watch: {
    searchText: {
    //   // 当props里的serachText发生改变时就会调用handler函数
    // // handler函数名是固定的
    //   handler (value) {
    //     console.log(value)
    //     this.loadSearchSuggestion(value)
    //   },
    //   immediate: true // 该回调会在侦听之后立即被调用
    // }

      // debounce函数：
      // 参数1： 一个函数
      // 参数2： 延迟时间，单位是毫秒
      // 返回值：防抖之后的函数
      handler: debounce(function (value) {
        this.loadSearchSuggestion(value)
      }, 1000),
      immediate: true // 该回调会在侦听之后立即被调用
    }
  },
  methods: {
    async loadSearchSuggestion (q) {
      try {
        const { data } = await getSearchSuggestions(q)
        console.log(data)
        this.suggestions = data.data.options
      } catch (err) {
        this.$toast('数据获取失败')
      }
    },
    highlight (text) {
      const highlightStr = `<span class="active">${this.searchText}</span>`
      // 正则表达式的中间内容会当做匹配字符来使用，而不是数据变量
      // 如果需要根据数据变量动态的创建正则表达式，则手动new RegExp
      // RegExp 正则表达式构造函数：
      // 参数1：匹配模式字符串，它会根据这个字符串创建正则对象 参数2：匹配模式，要写到字符串中 g:全局  i：忽略大小写
      const reg = new RegExp(this.searchText, 'gi')
      return text.replace(reg, highlightStr)
    }
  }
}
</script>

  <style lang="less" scoped>
  .search-suggestion {
    /deep/ span.active{
      color:#3286fa
    }
  }
  </style>
