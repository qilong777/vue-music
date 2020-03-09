<template>
  <div class="singer">
    <van-loading class="loading" v-show="isloading" type="spinner" />
    <div v-show="!isloading">
      <SingerList
        @changeCurrent="changeCurrent"
        @changeDistance="changeDistance"
        :distance="distance"
        :singerList="singerList"
        :dom="dom"></SingerList>
        <SingerSider
        @changeCurrent="changeCurrent"
        @changeDom="changeDom"
        :current="current"
        :singerList="singerList"
        :distance="distance"></SingerSider>
    </div>

  <transition name="slide">
    <router-view></router-view>
  </transition>

  </div>
</template>

<script>
import { getSingerList } from 'api'
import SingerList from 'components/Singer/SingerList'
import SingerSider from 'components/Singer/SingerSider'
export default {
  name: 'Singer',
  data () {
    return {
      singerList: [],
      current: '热门',
      dom: null,
      distance: [],
      isloading: true
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
          ele.src = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${ele.Fsinger_mid}.jpg?max_age=2592000`
          const index = singerList.findIndex(
            item => item.Findex === ele.Findex
          )
          if (ele.Findex === '9') {
            return
          }
          if (index === -1) {
            singerList.push({ Findex: ele.Findex, list: [ele] })
          } else {
            singerList[index].list.push(ele)
          }
        })

        singerList.sort(
          (a, b) => a.Findex.charCodeAt(0) - b.Findex.charCodeAt(0)
        )

        const hotList = data.slice(0, 10).map(ele => {
          return ele
        })

        singerList.unshift({ Findex: '热门', list: hotList })
        this.singerList = singerList
        this.isloading = false
      } catch (err) {

      }
    },

    // dom的改变
    changeDom (dom) {
      this.dom = dom
    },

    // distance数组的改变
    changeDistance (distance) {
      this.distance = distance
    },

    // current改变
    changeCurrent (index) {
      this.current = index
    }
  },

  components: {
    SingerList,
    SingerSider
  },
  created () {
    this.getSingerList()
  }
}
</script>

<style lang='scss' scoped>
.singer {
  position: relative;
  overflow: auto;
  height: 100%;
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
  .loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-15px);
    transform: translateX(-15px);
  }
}
</style>
