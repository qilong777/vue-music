<template>
<div class="singer">
  <Scroller :dom="dom" :handleToScroll="handleToScroll">
    <template>
      <ul class="singer-list">
        <li
          v-for="item in singerList"
          :key="item.Findex"
          :ref="item.Findex==='热门'?'hot':item.Findex">
          <h2>{{item.Findex}}</h2>
          <ul>
            <li v-for="item1 in item.list" :key="item1.Fsinger_id" class="item">
              <img v-lazy="item1.Fsinger_mid" alt="">
              <span v-text="item1.Fsinger_name"></span>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </Scroller>
  <ul class="sider">
    <li
      :class="[current===item.Findex?'current':'']"
      v-for="item in singerList"
      :key="item.Findex"
      @click="toEl(item.Findex)"
      @touchstart="touchStart"
      @touchmove="touchMove($event,item.Findex)"
      >{{item.Findex | format}}</li>
  </ul>
</div>

</template>

<script>
import { getSingerList } from 'api'
export default {
  name: '',
  data () {
    return {
      singerList: [],
      current: '热门',
      dom: null,
      distance: [],
      touch: {},
      isTouch: false
    }
  },
  methods: {
    // 获取并过滤数据
    async getSingerList () {
      try {
        let data = await getSingerList()
        if (data.message !== 'succ') {
          throw new Error('错误')
        }
        data = data.data.list
        const singerList = []

        data.forEach(ele => {
          ele.Fsinger_mid = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${ele.Fsinger_mid}.jpg?max_age=2592000`
          const index = singerList.findIndex(item => item.Findex === ele.Findex)
          if (ele.Findex === '9') {
            return
          }
          if (index === -1) {
            singerList.push({ Findex: ele.Findex, list: [ele] })
          } else {
            singerList[index].list.push(ele)
          }
        })
        singerList.sort((a, b) => a.Findex.charCodeAt(0) - b.Findex.charCodeAt(0))
        const hotList = (data.slice(0, 10)).map(ele => {
          return ele
        })
        singerList.unshift({ Findex: '热门', list: hotList })
        this.singerList = singerList
        this.$nextTick(() => {
          const distance = []
          for (const key in this.$refs) {
            distance.push(this.$refs[key][0].offsetTop)
          }
          this.distance = distance
        })
      } catch (err) {
        console.log(err)
      }
    },
    // 处理点击sider事件
    toEl (name) {
      this.current = name
      if (name === '热门') {
        name = 'hot'
      }
      this.dom = this.$refs[name][0]
    },

    // 处理滑动
    handleToScroll (pos) {
      // 获取距离数组
      const y = Math.abs(pos.y)
      // 判断每一次滚动的距离在什么范围内
      let scrollIndex = 0 // 滚动所在区域的下标
      for (let index = 0, len = this.distance.length; index < len; index++) {
        if (y >= this.distance[index] && y < this.distance[index + 1]) {
          scrollIndex = index
        } else if (y >= this.distance[len - 1]) {
          //  最后的边界判断
          scrollIndex = len - 1
        }
      }
      // 根据下标换字母
      const scrollFindex = this.singerList[scrollIndex].Findex
      this.current = scrollFindex
    },

    // 处理sider滑动
    // 手指的触摸移动事件
    touchStart (e) {
      const y = e.touches[0].pageY
      this.touch.y = y
      this.isTouch = true
    },
    touchMove (e, name) {
      // 待改
      if (this.isTouch) {
        this.toEl(name)
        this.isTouch = false
        this.touch.originIndex = this.singerList.findIndex(ele => ele.Findex === this.current)
      }
      const moveY = e.touches[0].pageY
      const moveDis = moveY - this.touch.y // 计算出移动过的距离
      const count = parseInt(moveDis / 18) // 获取移动过的格子数

      const index = this.touch.originIndex + count // 获取下标
      if (index < 0 || index > this.singerList.length - 1) {
        return
      }
      const moveFindex = this.singerList[index].Findex
      this.toEl(moveFindex)
    }
  },
  computed: {
    imgSrc (str) {
      console.log(str)

      return function () {

      }
    }
  },
  filters: {
    format (val) {
      return val[0]
    }
  },
  created () {
    this.getSingerList()
  }
}
</script>

<style lang='scss' scoped>
.singer{
  position: relative;
  overflow: auto;
  height: 100%;
  .singer-list{
    h2{
      height: .8rem;
      line-height: .8rem;
      padding-left: .533333rem;
      font-size: .32rem;
      color: hsla(0,0%,100%,.5);
      background: #333;
      font-weight: 400;
      margin: 0;
    }
    .item{
      display: flex;
      align-items: center;
      padding: .533333rem 0 0 .8rem;
      img{
        width: 1.333333rem;
        height: 1.333333rem;
        border-radius: 50%;
      }
      span{
        margin-left: 20px;
        color: hsla(0,0%,100%,.5);
        font-size: 14px;
      }
    }
  }
  .sider{
    position: fixed;
    z-index: 30;
    right: 0;
    top: 60%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: rgba(0,0,0,.3);
    font-family: Helvetica;
    li{
      padding: 3px;
      line-height: 1;
      color: hsla(0,0%,100%,.5);
      font-size: 12px;
      &.current{
        color: #ffcd32;
      }
    }
  }
}
</style>
