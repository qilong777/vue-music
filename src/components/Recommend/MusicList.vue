<template>
<div class='music-list'>
  <h2>热门歌单推荐</h2>
  <ul>
    <li v-for="item in list" :key="item.id" @tap="toDetail(item.dissid)">
      <div class="img-box">
        <img data-v-61707c42="" data-v-2e5f61c4="" width="60" height="60" v-lazy="item.imgurl">
      </div>
      <div class="content">
        <h3 class="name" v-text="item.creator.name"></h3>
        <p class="desc" v-text="item.dissname"></p>
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
  },
  methods: {
    toDetail (id) {
      this.$router.push('/recommend/' + id)
    }
  }
}
</script>

<style lang='scss' scoped>
.music-list{
  background-color: #222;
  h2{
    height: 1.733333rem;
    line-height: 1.733333rem;
    text-align: center;
    font-size: .373333rem;
    color: #ffcd32;
    font-weight: 400;
    margin: 0;
  }
  li{
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 .533333rem .533333rem .533333rem;
    .img-box{
      width: 1.6rem;
      padding-right: .533333rem;
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      line-height: .533333rem;
      overflow: hidden;
      font-size: .373333rem;
      .name{
        margin-bottom: .266667rem;
        color: #fff;
        margin: 0;
        font-size: 100%;
        font-weight: 400;
      }
      .desc{
        font-size: 100%;
        color: hsla(0,0%,100%,.3);
      }
    }
  }
}
</style>
