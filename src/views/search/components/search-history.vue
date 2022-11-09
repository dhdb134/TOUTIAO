<template>
    <div class="search-history">
      <van-cell title="搜索历史">
        <div v-if="isDeleteShow">
        <span class="delete" @click="allDelete ">全部删除</span>
        <span @click="isDeleteShow=false">完成</span>
      </div>

        <van-icon v-else name="delete" @click="isDeleteShow=true"></van-icon>
      </van-cell>
<van-cell :title="item"
v-for="(item, index) in searchHistory" :key="index"
@click="onSearchClick(item,index)">
    <van-icon v-show="isDeleteShow" name="close"/>
</van-cell>

    </div>
  </template>

<script>
export default {
  name: 'SearchHistory',
  props: {
    // prop数据
    // 是受父组件影响
    // 如果是普通数据（数字、字符串、布尔值）绝对不能修改，即便改了也不会传导给父组件
    // 如果是引用型数据（数组，对象）：
    //  可以修改，例如arr.push(), 不能重新赋值xxx= []
    searchHistory: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      isDeleteShow: false, // 控制删除显示状态
      localSearchHistory: this.searchHistory
    }
  },
  methods: {
    onSearchClick (item, index) {
      if (this.isDeleteShow) {
        // 删除状态，删除历史记录数据
        this.localSearchHistory.splice(index, 1)
      } else {
        // 非删除状态直接进行搜索
        this.$emit('search', item)
      }
    },
    allDelete () {
      const abc = []
      this.$emit('empty', abc)
    }
  }
}
</script>

  <style lang="less" scoped>
  .search-history{
   .delete{
    padding-right: 20px;
   }
  }
  </style>
