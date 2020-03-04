<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroller',
  props: {
    handleToScroll: {
      type: Function,
      default: function () {}
    },
    handleToTouchEnd: {
      type: Function,
      default: function () {}
    },
    dom: HTMLLIElement
  },
  data () {
    return {
      scroll: null
    }
  },
  methods: {
    toScrollTop (y) {
      this.scroll.scrollTo(0, y)
    },
    initScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        tap: true,
        probeType: 3
      })
      this.scroll.on('scroll', pos => {
        this.handleToScroll(pos)
      })
      this.scroll.on('touchEnd', pos => {
        this.handleToTouchEnd(pos)
      })
    }
  },
  computed: {

  },
  watch: {
    dom () {
      this.scroll.scrollToElement(this.dom)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
