<template>
  <Scroller class="commend">
    <template>
      <div>
        <!-- 轮播图 -->
        <Swiper :images="images"></Swiper>
        <!-- 歌单列表 -->
        <MusicList :list="list"></MusicList>
      </div>
    </template>
  </Scroller>
</template>

<script>
import Swiper from 'components/Recommend/Swiper'
import MusicList from 'components/Recommend/MusicList'
import { getBannerList, getSongList } from 'api'
export default {
  name: 'Commend',
  data () {
    return {
      images: [],
      list: []
    }
  },
  methods: {
    async getImages () {
      try {
        const data = await getBannerList()
        this.images = data.data.slider
      } catch (err) {
        console.log(err)
      }
    },
    async getList () {
      try {
        const data = await getSongList()
        this.list = data.data.list
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Swiper,
    MusicList
  },
  mounted () {
    this.getImages()
    this.getList()
  }
}
</script>

<style lang='scss'>
.commend{
  .swiper{
    img{
      width: 100%;
      height: 100%;
    }
    .van-swipe__indicator{
      width: .213333rem;
      height: .213333rem;
      &.van-swipe__indicator--active{
        width: .533333rem;
        border-radius: .133333rem;
        background: hsla(0,0%,100%,.8);
      }
    }
  }
}
</style>
