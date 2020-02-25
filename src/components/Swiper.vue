<template>
  <van-swipe class="swiper" :autoplay="2000" :height="165">
    <van-swipe-item v-for="image in images" :key="image.id">
      <img v-lazy="image.picUrl" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    images: {
      type: Array,
      default: () => { return [] }
    }

  },
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
