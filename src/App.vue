<template>
  <div id="app">
    <h1>黑马头条</h1>
    <router-view />
    <i class="iconfont icon-a-dianzan1"></i>
    <van-cell-group inset>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
<van-button loading type="primary" />
<van-button loading type="primary" loading-type="spinner" />
<van-button loading type="info" loading-text="加载中..." />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less"></style>
