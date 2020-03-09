<template>
<div class="rank">
  <van-loading class="loading" v-if="isloading" type="spinner" />
  <Scroller v-else>
    <ul>
      <li v-for="item in rankList" :key="item.id" class="rank-item" @tap="toDetail(item.id)" >
        <div class="img-box">
          <img v-lazy="item.picUrl" alt="">
        </div>
        <ul class="song-list">
          <li class="song-item" v-for="(ele, index) in item.songList" :key="index">
            {{index+1}}{{ele.songname}}-{{ele.singername}}
          </li>
        </ul>
      </li>
    </ul>
  </Scroller>
  <transition name="slide">
    <router-view></router-view>
  </transition>
</div>

</template>

<script>
import { getRankList } from 'api'
export default {
  name: 'Rank',
  data () {
    return {
      rankList: [],
      isloading: true
    }
  },
  methods: {
    async getRankList () {
      try {
        this.rankList = (await getRankList()).data.topList
        this.isloading = false
      } catch (error) {

      }
      console.log(this.rankList)
    },
    toDetail (id) {
      this.$router.push('/rank/' + id)
    }
  },
  created () {
    this.getRankList()
  }
}
</script>

<style lang='scss' scoped>
.rank{
  .rank-item{
    display: flex;
    margin: 0 20px;
    padding-top: 20px;
    height: 100px;
    .img-box{
      width: 100px;
      height: 100px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .song-list{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px;
      height: 100px;
      overflow: hidden;
      background: #333;
      color: hsla(0,0%,100%,.3);
      font-size: 12px;
      .song-item{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        line-height: 26px;
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
