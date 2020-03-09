<template>
  <p class='lyric'>
     {{text}}
  </p>
</template>
<script>
import { getLyricByMid } from 'api'
import Lyric from 'lyric-parser'
import { Base64 } from 'js-base64'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      text: '暂无歌词',
      lyricObj: null
    }
  },
  props: ['touchTime'],
  computed: {
    ...mapGetters(['currentSong']),
    ...mapState(['currentIndex'])
  },
  watch: {
    touchTime (newValue, oldValue) {
      if (this.lyricObj) {
        this.lyricObj.seek(newValue * 1000)
        this.lyricObj.stop()
      }
    },
    currentSong (newData, oldData) {
      this.text = '暂无歌词'
      const { songmid } = newData
      this.getLyric(songmid)
    }
  },
  methods: {
    async getLyric (songmid) {
      try {
        const data = await getLyricByMid(songmid)
        const decode = Base64.decode(data.lyric)
        if (this.lyricObj) {
          this.lyricObj = null
        }
        this.lyricObj = new Lyric(decode, ({ txt }) => {
          this.text = txt
        })
      } catch (err) {

      }
    }
  },
  mounted () {
    const { songmid } = this.currentSong
    this.getLyric(songmid)
  }
}
</script>
<style lang="scss" scoped>
.lyric{
  height: 20px;
  line-height: 20px;
  width: 80%;
  margin: 0 auto;
  font-size: 14px;
  color: hsla(0,0%,100%,.5);
  overflow: hidden;
}

</style>
