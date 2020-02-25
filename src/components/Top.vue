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
  height: 44px;
  background-color: #222;
  text-align: center;
  color:#ffcd32;
  .title{
    height: 100%;
    // width: 150px;
    img{
      vertical-align: top;
      margin-top: 6px;
      width: 30px;
      height: 32px;
      margin-right: 9px;
    }
    h1{
      display: inline-block;
      height: 44px;
      vertical-align: top;
      line-height: 44px;
      font-size: 18px;
      font-weight: 400;
      margin: 0;
    }
  }
  .van-icon-contact{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    width: 44px;
    height: 44px;
    line-height: 44px;
  }
}
</style>
