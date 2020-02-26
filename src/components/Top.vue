<template>
<header class='header'>
  <div class="title">
    <img src="@/assets/img/logo.png" alt="logo图像">
    <h1>浩哥音乐</h1>
  </div>
  <van-icon name="contact" />
</header>
</template>

<script>

export default {
  name: 'Top',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
.header{
  position: relative;
  height: 1.173333rem;
  background-color: #222;
  text-align: center;
  color:#ffcd32;
  .title{
    height: 100%;
    // width: 150px;
    img{
      vertical-align: top;
      margin-top: .16rem;
      width: .8rem;
      height: .853333rem;
      margin-right: .24rem;
    }
    h1{
      display: inline-block;
      height: 1.173333rem;
      vertical-align: top;
      line-height: 1.173333rem;
      font-size: .48rem;
      font-weight: 400;
      margin: 0;
    }
  }
  .van-icon-contact{
    position: absolute;
    top: 0;
    right: 0;
    font-size: .693333rem;
    width: 1.173333rem;
    height: 1.173333rem;
    line-height: 1.173333rem;
  }
}
</style>
