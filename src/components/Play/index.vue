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

    <!-- 轮播图区域 -->
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
    <div class='sm-img'>
      <img :class='cd' :src="currentSong.albumUrl" alt="">
    </div>
    <div class="text">
      <h2>{{currentSong.songname}}</h2>
      <p>{{currentSong.singer[0].name}}</p>
    </div>
    <van-icon @click.stop :name="play?'pause-circle-o':'play-circle-o'" @click='togglePlay' />
    <van-icon @click.stop="showList=!showList" name="music-o" :info="songList.length" />
  </div>

  <!-- 音频 -->
  <audio  ref='audio'
    @ended='ended'
    @canplay='canplay'
    @timeupdate="timeupdate"
    :src='currentSong.audioUrl'>
  </audio>

  <!-- 歌曲列表弹出层 -->
  <van-popup
    v-model="showList"
    position="bottom"
    >
    <div class="pop-top">
      <div class="left">
        <i class="iconfont" :class="'icon-' + loops[loop]" @click="changeLoop"></i>
        <span>{{loopChinese[loop]}}</span>
      </div>
      <van-icon class="del-icon" name="delete" @click="clearSongList" />
    </div>
    <div class="wrapper">
      <ul class="show-list">
        <li @click="changeCurrentIndex(index)" v-for="(item,index) in songList" :key="item.songmid">
          <div class="left">
            <van-icon v-if="currentIndex===index" @click.stop name="play-circle-o"/>
            <span>{{item.songname}}</span>
          </div>
          <div class="right">
            <i class="iconfont icon-shoucang"></i>
            <van-icon name="cross" @click.stop="deleteSongList(index)" />
          </div>
        </li>
      </ul>
    </div>
    <div class="add-wrapper">
      <van-button size="small" class="add-btn" icon="plus" round  type="info">添加歌曲到队列</van-button>
    </div>

    <div class="close" @click="showList=false">
      关闭
    </div>
  </van-popup>
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
      loops: ['danquxunhuan', 'xunhuanbofang', 'suijibofang'],
      loopChinese: ['单曲循环', '循环播放', '随机播放'],
      play: false,
      // 是否显示歌单弹窗列表
      showList: false
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
    ...mapMutations(['changeScreen', 'changeCurrentIndex', 'nextCurrentIndex', 'prevCurrentIndex', 'changeLoop', 'deleteSongList', 'clearSongList']),
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
      }
    }

    .content-wrapper{
      .img{
        width:100%;
        padding: 20px;
        box-sizing: border-box;
        img{
          width: 85%;
          border: 10px solid hsla(0,0%,100%,.1);
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
    display: flex;
    position: fixed;
    bottom: 0px;
    width:100%;
    height: 1.6rem;
    align-items: center;
    justify-content: center;
    background: #333;
    z-index: 51;
    .sm-img{
      width: 1.066667rem;
      height: 1.066667rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .text{
      text-align: left;
      width: 5.333333rem;
      margin: 0 .133333rem;
      h2{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0;
        font-weight: 400;
        font-size: .373333rem;
      }
      p{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0;
        font-size: .32rem;
        color: hsla(0,0%,100%,.3);
      }
    }
    .van-icon{
      font-size: 1.066667rem;
      color: rgba(255,205,49,.5);
      margin: 0 .133333rem;
    }

  }

  .van-popup{
    background-color: #333;
    .pop-top{
      display: flex;
      padding: 20px 30px 10px 20px;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        align-items: center;
        i{
          margin-right: 10px;
          font-size: 30px;
          color: rgba(255,205,49,.5);
        }
        span{
          font-size: 14px;
          color: hsla(0,0%,100%,.5);
        }
      }
      .del-icon{
        font-size: 18px;
        color: hsla(0,0%,100%,.3);
      }

    }
    .wrapper{
      overflow: auto;
      max-height: 250px;
      .show-list{
        li{
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 40px;
          padding: 0 30px 0 20px;
          overflow: hidden;
          .left{
            display: flex;
            align-items: center;
            i{
              font-size: 12px;
              color: rgba(255,205,49,.5);
              margin-right: 10px;
            }
            span{
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              font-size: 14px;
              color: hsla(0,0%,100%,.3);
            }
          }
          .right{
            font-size: 12px;
            color: #ffcd32;
            .icon-shoucang{
              margin-right: 15px;
            }
          }
        }
      }
    }
    .add-wrapper{
      width: 100%;
      text-align: center;
      .add-btn{
        width: 140px;
        height: auto;
        margin: 20px auto 30px auto;
        border: 1px solid hsla(0,0%,100%,.5);
        color: hsla(0,0%,100%,.5);
        background-color: #333;
      }
    }
    .close{
      line-height: 50px;
      text-align: center;
      background: #222;
      font-size: 16px;
      color: hsla(0,0%,100%,.5);
    }
  }
  @keyframes rotate {
    0% {
     transform: rotate(0deg)
    }
    100%{
      transform: rotate(360deg)
    }
  }
  img{
    border-radius:50%;
  }
  & .cd{
    animation: rotate 10s linear infinite;
  }
  & .paused{
    animation-play-state: paused;
  }
}
</style>
