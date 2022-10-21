<template>
 <van-cell class="airticle-item">
<div slot="title" class="title van-multi-ellipsis--l2"  >{{airticle.title}}ASD2ASFDSAC+++东方闪电asdasdasdasd实打实大大叔大婶多阿萨德阿萨德时代阿 师多所阿萨德啊</div>
<div slot="label">
  <!-- 在有服务器传递数据情况下底部3张图片代码
  <div v-if="airticle.cover.type ===3 " class="cover-warp">
  <div class="cover-item" v-for="( img, index ) in airticle.cover.imgaes" :key="index">
<van-image
class="cover-item-img"
:src="img"
fit="cover"
/>
  </div>
  </div> -->
  <!-- 在没有服务器数据情况下底部三张图片代码 -->
  <!-- <div class="cover-warp"  >
    <span class="cover-item"><van-image
  width="100"
  height="100"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
  /></span>
    <span class="cover-item"><van-image
  width="100"
  height="100"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
  /></span>
    <span class="cover-item"><van-image
  width="100"
  height="100"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
  /></span>
  </div> -->
  <div class="label-info-wrap">
    <span>作者</span>
    <span>评论</span>
    <span>发布时间</span>
  </div>
</div>
 <van-image
    class="right-cover"
    slot="default"
  width="100"
  height="100"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
  fit="cover"

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

  <style scoped lang="less" >
.airticle-item{
  .title{
    padding-right: 50px;
    font-size: 32px;
    color: #3a3a3a;
  }
  .van-cell__value{
    flex: unset;
    // right: 10px;
    width: 232px;
    height: 146px;
  }
  .right-cover{
    width: 232px;
    height: 146px;
  }
  .cover-warp{
   display:flex;
   .cover-item{
    flex:1;
    height: 146px;
   }
  }
  .label-info-wrap span{
    font-size: 22px;
    color: #b4b4b4;
    margin-right: 25px

  }
}
  </style>
