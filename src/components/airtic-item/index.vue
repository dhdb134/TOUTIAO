<template>
 <van-cell class="airticle-item">
<div slot="title" class="title van-multi-ellipsis--l2">{{airticle.title}}ASDASDASDASD2ASDSSDASDA爱上大大声奥术大师师德师风颂德歌功多少分违法的</div>
<div slot="label">
  <div>
    <span>作者</span>
    <span>评论</span>
    <span>发布时间</span>
  </div>
</div>
    <van-image
    slot="default"
  width="100"
  height="100"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>

 </van-cell>
  </template>

<script>
export default {
  name: 'AirticItem',
  components: {},
  props: {
    airticle: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created: {},
  mounted: {},
  methods: {}
}
</script>

  <style lang="less" scoped>
  </style>
