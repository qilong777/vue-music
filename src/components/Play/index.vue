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

      <Lyric
        :endTime = 'endTime'
        :touchTime = 'touchTime'
        :play='play'
      ></Lyric>
    </div>

    <div class="bottom">
      <Progress
        :startTime = 'startTime'
        :endTime = 'endTime'
        :touchTime = 'touchTime'
        @updateCurrentTime='updateCurrentTime'
        @updateTouchTime='updateTouchTime'
      ></Progress>
      <div class="control">
        <i class="iconfont" :class="'icon-' + loops[loop]" @click="changeLoop"></i>
        <i class="iconfont icon-shangyishou" @click='prevCurrentIndex'></i>
        <van-icon :name="play?'pause-circle-o':'play-circle-o'" @click='togglePlay' />
        <i class="iconfont icon-xiayishou" @click='nextCurrentIndex'></i>
        <i class="iconfont icon-shoucang" ></i>
      </div>

    </div>

  </div>
  <div v-else
    class='small'
    @click='changeScreen(true)'
    >
    小屏
  </div>

  <audio  ref='audio'
    @ended='ended'
    @canplay='canplay'
    @timeupdate="timeupdate"
    :src='currentSong.audioUrl'>
  </audio>
</div>
</template>

<script>
import 'assets/iconfont/iconfont.css'
import Progress from 'components/Progress'
import Lyric from 'components/Lyric'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Play',
  data () {
    return {
      startTime: 0,
      endTime: 0,
      touchTime: 0,
      loops: ['danqubofang', 'xunhuanbofang', 'suijibofang'],
      play: false
    }
  },
  computed: {
    ...mapState(['currentIndex', 'songList', 'fullScreen', 'loop']),
    ...mapGetters(['currentSong']),
    cd () {
      return this.play ? 'cd' : 'cd paused'
    }
  },
  methods: {
    ...mapMutations(['changeScreen', 'changeCurrentIndex', 'nextCurrentIndex', 'prevCurrentIndex', 'changeLoop']),
    togglePlay () {
      this.play = !this.play
    },
    timeupdate (e) {
      // console.log('歌曲播放',e)
      // 随着播放更新时间
      this.startTime = e.target.currentTime
    },
    canplay () {
      // 歌曲可以播放
      this.audio = this.$refs.audio
      this.audio.play()
      this.play = true
      // 获取歌曲的总时长
      this.endTime = this.audio.duration
    },
    updateCurrentTime (s) {
      if (!this.audio) { return false }
      // 更改播放的时间
      this.audio.currentTime = s
    },
    updateTouchTime (s) {
      this.touchTime = s
    },
    ended () {
      let index = this.currentIndex
      switch (this.loop) {
        case 0:
          //  单曲循环
          this.play = true
          this.audio.play()
          break
        case 1:
          // 播放夏一首歌
          this.nextCurrentIndex()
          // this.audio.play()
          break
        case 2:
          // 随机播放
          // 除非歌单只有一首歌曲，否则下一首歌曲不能和这一首相同
          if (this.songList.length !== 1) {
            while (index === this.currentIndex) {
              index = parseInt(Math.random() * this.songList.length)
            }
          }
          this.changeCurrentIndex(index)
          break
        default:
          break
      }
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
  },
  components: {
    Progress,
    Lyric
  },
  mounted () {

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
      bottom: 1.333333rem;
      width: 100%;
      .control{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: .266667rem .266667rem 0;
        color: #ffcd32;
        font-size: .8rem;
        .iconfont{
          font-size: .8rem;
        }
        .van-icon{
          font-size: 1.333333rem;
        }
      }
    }

  }
  .small{
    position: fixed;
    width:100%;
    bottom: 0px;
    height: 80px;
    background: red;
    z-index: 50;
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
