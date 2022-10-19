<template>
 <van-cell
  title="单元格"
   value="内容"
    label="描述信息" >
<div slot="title" class="title">{{airticle.title}}</div>
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
