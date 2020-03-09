<template>
  <div class='progress'>
     <span>{{touch?touchTime:startTime|handleTime}}</span>
     <div class='wrapper' ref='wrapper' @click='clickProgress'>
       <div class='content' ref='content'></div>
       <div class='dot' ref='dot'
            @touchstart='touchStart'
            @touchmove= 'touchMove'
            @touchend= 'touchEnd'
       >
       </div>
     </div>
     <span>{{endTime|handleTime}}</span>
     <!-- <button @click='jump'>跳转</button> -->
  </div>
</template>
<script>
export default {
  props: {
    startTime: { type: Number, default: 0 },
    touchTime: { type: Number, default: 0 },
    endTime: { type: Number, default: 0 }
  },
  data () {
    return {
      touch: false,
      distance: 0
    }
  },
  methods: {
    // 歌曲跳转
    jump (precent) {
      // console.log(precent,this.endTime)
      const time = precent * this.endTime / 100
      // 调用父组件的方法控制播放时间
      this.$emit('updateCurrentTime', time)
    },
    // 按下开始
    touchStart (e) {
      this.touch = true
    },
    // 按下移动
    touchMove (e) {
      const left = this.$refs.wrapper.getBoundingClientRect().left
      const width = this.$refs.wrapper.clientWidth
      this.distance = e.touches[0].pageX - left
      // console.log('移动',this.distance)
      if (this.distance < 0) {
        this.distance = 0
      } else if (this.distance > width) {
        this.distance = width
      }
      this.offsetMove(this.distance)
    },
    // 按下结束
    touchEnd () {
      this.touch = false
      this.offsetMove(this.distance)
    },
    // 点击事件
    clickProgress (e) {
      // 点击进度条跳转
      const x = e.pageX
      const left = this.$refs.wrapper.getBoundingClientRect().left
      const distance = x - left
      // console.log('点击进度条',distance)
      this.offsetMove(distance)
    },
    // 处理进度条和小圆点的样式
    offsetMove (distance) {
      // 进度条的移动
      const precent = (distance / this.$refs.wrapper.clientWidth) * 100

      // 按下后时间的修改
      this.$emit('updateTouchTime', (distance / this.$refs.wrapper.clientWidth) * this.endTime)

      this.$refs.content.style.width = precent + '%'
      // 小圆点的移动
      this.$refs.dot.style.transform = `translateX(${distance}px)`
      // 控制歌曲时间
      // 按下状态 不控制歌曲快进
      if (!this.touch) { this.jump(precent) }
    }
  },

  filters: {
    // 时间过滤器把second转为 m-ss
    handleTime (data) {
      const time = parseInt(data)
      const m = parseInt(time / 60)
      // 秒数  01 02 11
      const s = '0' + (time % 60)
      return m + ':' + s.slice(-2)
    }
  },
  watch: {
    startTime (newValue, oldValue) {
      // 当前播放时间所占的百分比
      // 如果是按下状态进度条不受歌曲播放控制
      if (this.touch) { return false }
      this.$emit('updateTouchTime', newValue)
      const precent = (this.startTime / this.endTime) * 100
      // 控制进度条长度变化
      // console.log(precent)
      this.$refs.content.style.width = precent + '%'
      // 控制小圆点
      const width = this.$refs.wrapper.clientWidth * precent / 100
      this.$refs.dot.style.transform = `translateX(${width}px)`
    }
  }
}

</script>
<style lang="scss" scoped>
.progress{
  width: 80%;
  height: .8rem;
  display: flex;
  font-size: .373333rem;
  align-items: center;
  margin: 0 auto;
  line-height: .8rem;
  font-size: .32rem;
  span{
    display: inline-block;
    width: .8rem;
  }
  .wrapper{
    margin: 0px 15px;
    width: 7.2rem;
    height: .106667rem;
    background: rgba(0,0,0,.3);
    position: relative;
    .content{
      height: 4px;
      width: 0%;
      background: #ffcd32;
    }
    .dot{
      position: absolute;
      width: 16px;
      height: 16px;
      background: #fff;
      border-radius:50%;
      left: -7px;
      top: -6px;
      box-sizing: border-box;
      background: #ffcd32;
      border: 3px solid #fff;
    }
  }
}
</style>
