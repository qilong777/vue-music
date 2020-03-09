<template>
<div class="commend">
  <Scroller >
    <div>
      <!-- 轮播图 -->
      <Swiper :images="images"></Swiper>
      <!-- 歌单列表 -->
      <van-loading class="loading" v-if="isloading" type="spinner" />
      <MusicList v-else :list="list"></MusicList>

    </div>
  </Scroller>
  <transition name="slide">
    <router-view></router-view>
  </transition>
</div>

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
      list: [],
      isloading: true
    }
  },
  methods: {
    async getImages () {
      try {
        const data = await getBannerList()
        this.images = data.data.slider
      } catch (err) {

      }
    },
    async getList () {
      try {
        const data = await getSongList()
        this.isloading = false
        this.list = data.data.list
      } catch (err) {

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
    .van-swipe__track{
      height:4.4rem !important;
    }
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
  .loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-15px);
    transform: translateX(-15px);
  }
  .slide-enter-active,
  .slide-leave-active{
    transition: all 0.3s;
  }
  .slide-enter,
  .slide-leave-to{
    transform: translateX(100%)
  }
  .slide-enter-to,
  .slide-leave{
    transform: translateX(0%)
  }
}
</style>
