<template>
  <van-tabs
    background="#222"
    color="#ffcd32"
    title-active-color="#ffcd32"
    title-inactive-color="hsla(0,0%,100%,.5)"
    line-width="30"
    v-model="active"
    class="tab-bar">
    <van-tab title-style="{fontSize:'14px'}" title="推荐" to="/commend"></van-tab>
    <van-tab title="歌手" to="/singer"></van-tab>
    <van-tab title="排行" to="/rank"></van-tab>
    <van-tab title="搜索" to="/search"></van-tab>
  </van-tabs>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang='scss'>
.tab-bar{
  .van-hairline--top-bottom::after,
  .van-hairline-unset--top-bottom::after{
    border-width: 0 !important;
  }
  .van-tabs__line{
    bottom: 35%;
  }
}
</style>
