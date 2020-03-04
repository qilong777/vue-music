<template>
<ul class="sider">
  <li
    :class="[current===item.Findex?'current':'']"
    v-for="item in singerList"
    :key="item.Findex"
    @touchstart="touchStart($event,item.Findex)"
    @touchmove="touchMove($event,item.Findex)"
  >{{item.Findex | format}}</li>
</ul>
</template>

<script>
export default {
  name: 'SingerSider',
  props: {
    current: String,
    singerList: Array,
    distance: Array
  },
  data () {
    return {
      touch: {}
    }
  },
  methods: {
    // 处理sider滑动
    // 手指的触摸移动事件
    touchStart (e, name) {
      this.toEl(name)
      const y = e.touches[0].pageY
      this.touch.y = y
      this.touch.originIndex = this.singerList.findIndex(ele => ele.Findex === name)
    },
    touchMove (e, name) {
      const moveY = e.touches[0].pageY
      const moveDis = moveY - this.touch.y // 计算出移动过的距离
      const count = parseInt(moveDis / 18) // 获取移动过的格子数
      const index = this.touch.originIndex + count // 获取下标

      if (index < 0 || index > this.singerList.length - 1) {
        return
      }
      const moveFindex = this.singerList[index].Findex
      this.toEl(moveFindex)
    },
    toEl (name) {
      this.$emit('changeCurrent', name)
      if (name === '热门') {
        name = 'hot'
      }
      this.$emit('changeDom', this.$parent.$children[0].$refs[name][0])
    }
  },
  filters: {
    // 格式化sider的数据
    format (val) {
      return val[0]
    }
  }
}
</script>

<style lang='scss' scoped>
.sider {
    position: fixed;
    z-index: 30;
    right: 0;
    top: 60%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    font-family: Helvetica;
    li {
      padding: 3px;
      line-height: 1;
      color: hsla(0, 0%, 100%, 0.5);
      font-size: 12px;
      &.current {
        color: #ffcd32;
      }
    }
  }
</style>
