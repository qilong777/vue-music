<template>
<div class='player' v-if='songList.length'>
  <div v-if='fullScreen' class='big'>
    <!-- 头部 -->
    <van-icon name="arrow-down" @click='changeScreen(false)' />
    <h1 class='player-top'>
      {{currentSong.songname}}
    </h1>
      <!-- 背景 -->
    <div class='bg'>
      <img :src="currentSong.albumUrl" alt="">
    </div>
    <!-- 歌手 -->
    <h2 class='name'>{{currentSong.singer[0].name}}</h2>

    <div class="content-wrapper">
      <!-- 专辑图片 -->
      <div class='img'>
        <img :class='cd' :src="currentSong.albumUrl" alt="">
      </div>

      <p class="desc">词:{{currentSong.singer[0].name}}</p>
    </div>

    <div class="bottom">

      <button @click='togglePlay'>播放</button>
      <button @click='next'>下一曲</button>
    </div>

  </div>
  <div v-else
    class='small'
    @click='changeScreen(true)'
    >
    小屏
  </div>

  <audio  ref='audio'
    @canplay='canplay'
    controls :src='currentSong.audioUrl'>
  </audio>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Play',
  data () {
    return {
      play: false
    }
  },
  computed: {
    ...mapState(['songList', 'fullScreen']),
    ...mapGetters(['currentSong']),
    cd () {
      return this.play ? 'cd' : 'cd paused'
    }
  },
  methods: {
    ...mapMutations(['changeScreen', 'nextCurrendIndex']),
    togglePlay () {
      this.play = !this.play
    },
    canplay () {
      // 歌曲可以播放
      this.audio = this.$refs.audio
      this.audio.play()
      this.play = true
      // console.log(this.audio.__proto__)
    },
    next () {
      // 下一曲
      this.nextCurrendIndex()
    }
  },
  watch: {
    play (newValue, oldValue) {
      if (!this.audio) return false
      if (newValue) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.player{
  color: #fff;
  .big{
    position: fixed;
    top:0px;
    bottom: 0px;
    left:0;
    right:0;
    background: #222;
    z-index: 100;
    text-align: center;
    .van-icon-arrow-down{
      position: absolute;
      top: 5px;
      left: 10px;
      color: #ffcd32;
      font-size: .64rem;
    }
    .player-top{
      font-size: .48rem;
      line-height: 40px;
      margin: 0;
      font-weight: 400;
    }
    .name{
      line-height: 20px;
      font-size: 14px;
      margin: 0;
      font-weight: 400;
    }
    .bg{
      position: absolute;
      z-index: -9;
      top: 0px;
      width: 100%;
      height: 100%;
      filter: blur(20px);
      opacity: 0.6;
      img{
        width: 100%;
        height: 100%;
        &.cd{
          animation: rotate 15s linear infinite;
        }
        &.paused{
          animation-play-state: paused;
        }
      }
    }

    .content-wrapper{
      .img{
        width:100%;
        padding: 20px;
        box-sizing: border-box;
        img{
            width: 85%;
            border-radius:50%;
            border: 10px solid hsla(0,0%,100%,.1);
        }
        & .cd{
          animation: rotate 10s linear infinite;
        }
        & .paused{
          animation-play-state: paused;
        }
      }
      .desc{
        margin: 0;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: hsla(0,0%,100%,.5);
      }
    }

    .bottom{
      position: absolute;
      bottom: 50px;
      width: 100%;
    }

  }
  .small{
    position: fixed;
    width:100%;
    bottom: 0px;
    height: 80px;
    background: lightgreen
  }
  @keyframes rotate {
    0% {
     transform: rotate(0deg)
    }
    100%{
      transform: rotate(360deg)
    }
  }
}
</style>
