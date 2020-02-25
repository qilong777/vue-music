<template>
<div class='music-list'>
  <h2>热门歌单推荐</h2>
  <ul>
    <li v-for="item in list" :key="item.id">
      <div class="img-box">
        <img data-v-61707c42="" data-v-2e5f61c4="" width="60" height="60" v-lazy="item.imgurl">
      </div>
      <div class="content">
        <h3 class="name" v-text="item.name"></h3>
        <p class="desc" v-text="item.dissname">喂，我们有多久没见了</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'MusicList',
  props: {
    list: {
      type: Array,
      default: () => { return [] }
    }

  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.music-list{
  background-color: #222;
  h2{
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: 14px;
    color: #ffcd32;
    font-weight: 400;
    margin: 0;
  }
  li{
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px 20px 20px;
    .img-box{
      width: 60px;
      padding-right: 20px;
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      font-size: 14px;
      .name{
        margin-bottom: 10px;
        color: #fff;
        margin: 0;
      }
      .desc{
        color: hsla(0,0%,100%,.3);
      }
    }
  }
}
</style>
