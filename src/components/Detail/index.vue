<template>
  <div class="detail">
    <div class="detail-top">
      <van-icon name="arrow-left" @click="$router.back()" />
      <h1>{{name}}</h1>
    </div>
    <div class="bg"  :style="{'background-image':`url(${imgSrc})`}" ref="bgEl">
      <div class="filter"></div>
      <div class="play-wrapper">
      <div class="play" v-show="isPlayShow" @click="openPlay()">
        <van-icon name="play-circle-o" />
        <span>随机播放全部</span>
      </div>
    </div>
    </div>
    <div class="container" ref="wrapper">
      <ul class="list">
        <li v-for="(item,index) in list" :key="index" @tap="openPlay(index)">
          <h2 class="name">{{item.songname}}</h2>
          <p class="desc">{{name}}·{{item.albumname}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import { getSingerById, getSongUrlByMid } from 'api'
export default {
  name: 'DetailTop',
  data () {
    return {
      name: '',
      imgSrc: '',
      list: [],
      isPlayShow: true
    }
  },
  methods: {
    ...mapMutations(['addSongList', 'changeCurrentIndex', 'changeScreen']),
    openPlay (index) {
      if (index !== undefined) {
        // 点击歌的li 显示播放器
        this.addSongList([this.list[index]])
      } else {
        const temp = this.list
        this.addSongList([...this.list.sort((a, b) => Math.random() - 0.5)])
        this.list = temp
      }
      // 点击屏幕变大
      this.changeScreen(true)
    },
    handleToScroll ({ y }, imgH, bgEl) {
      if (y < 0) {
        if (Math.abs(y) >= imgH - 40) {
          bgEl.style.paddingTop = '0px'
          bgEl.style.height = '40px'
          bgEl.style.zIndex = '10'
          this.isPlayShow = false
        } else {
          bgEl.style.paddingTop = '70%'
          bgEl.style.height = '0px'
          bgEl.style.zIndex = '0'
          this.isPlayShow = true
        }
      } else {
        const scale = 1 + y / imgH
        bgEl.style.transform = `scale(${scale})`
      }
    },
    // 获取并处理数据
    async getData () {
      try {
        const { id } = this.$route.params
        const data = await getSingerById(id)
        // const data1 = await getSongUrlByMid(id)

        this.name = data.singer_name
        const mids = []
        this.imgSrc = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${data.singer_mid}.jpg?max_age=2592000`
        const result = data.list.map(ele => {
          const { albummid, albumname, singer, songmid, songname } = ele.musicData

          const albumUrl = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${albummid}.jpg?max_age=2592000`
          mids.push(songmid)
          return { albummid, albumname, singer, songmid, songname, albumUrl }
        })

        const { urls } = await getSongUrlByMid(mids)
        for (let index = 0, len = result.length; index < len; index++) {
          result[index].audioUrl = urls[index]
        }
        this.list = result

        this.$nextTick(() => {
          const bgEl = this.$refs.bgEl
          const imgH = bgEl.clientHeight
          this.scroll = new BScroll(this.$refs.wrapper, {
            tap: true,
            probeType: 3
          })
          this.scroll.on('scroll', pos => {
            this.handleToScroll(pos, imgH, bgEl)
          })
        })
      } catch (err) {
        console.log(err)
      }
    }
  },

  created () {
    this.getData()
  }
}
</script>

<style lang='scss' scoped>
.detail{
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: #222;
  z-index: 50;
  .detail-top{
    position: absolute;
    width: 100%;
    z-index: 40;
    text-align: center;
    .van-icon-arrow-left{
      position: absolute;
      font-size: 22px;
      height: 40px;
      line-height: 40px;
      color: #ffcd32;
      left: .4rem;
    }
    h1{
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      line-height: 40px;
      font-size: 18px;
      color: #fff;
      margin: 0;
      font-weight: 400;
    }
  }
  .bg {
    position: relative;
    width: 100%;
    padding-top: 70%;
    transform-origin: top;
    background-size: cover;
    z-index: 1;
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.4);
    }
    .play-wrapper {
      position: absolute;
      bottom: 0.533333rem;
      z-index: 50;
      width: 100%;
      font-weight: 400;
      .play {
        box-sizing: border-box;
        width: 3.6rem;
        padding: .186667rem 0;
        margin: 0 auto;
        text-align: center;
        border: 1px solid #ffcd32;
        color: #ffcd32;
        border-radius: 2.666667rem;
        font-size: 0;

        .van-icon-play-circle-o {
          margin-right: .16rem;
          font-size: 0.48rem;
        }
        span {
          vertical-align: top;
          font-size: 0.32rem;
        }
      }
    }
  }
  .container{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: visible;
    .list {
      position: absolute;
      background-color: #222;
      padding: .533333rem .8rem;
      z-index: 2;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        height: 1.706667rem;
        font-size: .373333rem;
        .name,
        .desc {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          color: #fff;
          font-size: 100%;
          margin: 0;
          font-weight: 400;
        }
        .desc {
          font-size: 100%;
          margin-top: .106667rem;
          color: hsla(0, 0%, 100%, 0.3);
        }
      }
    }
  }

}
</style>
