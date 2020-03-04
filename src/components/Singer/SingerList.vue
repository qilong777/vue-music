<template>
<Scroller :dom="dom" :handleToScroll="handleToScroll">
  <ul class="singer-list">
    <li
      v-for="item in singerList"
      :key="item.Findex"
      :ref="item.Findex==='热门'?'hot':item.Findex"
    >
      <h2>{{item.Findex}}</h2>
      <ul>
        <li @tap="toDetail(item1.Fsinger_mid)" v-for="item1 in item.list" :key="item1.Fsinger_id" class="item">
          <img v-lazy="item1.src" alt />
          <span v-text="item1.Fsinger_name"></span>
        </li>
      </ul>
    </li>
  </ul>
</Scroller>
</template>

<script>
export default {
  name: 'SingerList',
  props: {
    singerList: Array,
    distance: {
      type: Array,
      default: () => []
    },
    dom: HTMLLIElement
  },
  data () {
    return {
    }
  },
  methods: {
    // 处理scroll 改变索引兰
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
      this.$emit('changeCurrent', scrollFindex)
    },
    // 编程式导航
    toDetail (id) {
      this.$router.push('/singer/' + id)
    }
  },
  watch: {
    singerList () {
      this.$nextTick(() => {
        const distance = []
        for (const key in this.$refs) {
          distance.push(this.$refs[key][0].offsetTop)
        }
        this.$emit('changeDistance', distance)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.singer-list {
  h2 {
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.533333rem;
    font-size: 0.32rem;
    color: hsla(0, 0%, 100%, 0.5);
    background: #333;
    font-weight: 400;
    margin: 0;
  }
  .item {
    display: flex;
    align-items: center;
    padding: 0.533333rem 0 0 0.8rem;
    img {
      width: 1.333333rem;
      height: 1.333333rem;
      border-radius: 50%;
    }
    span {
      margin-left: 20px;
      color: hsla(0, 0%, 100%, 0.5);
      font-size: 14px;
    }
  }
}
</style>
