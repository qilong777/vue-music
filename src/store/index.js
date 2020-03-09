import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songList: [], // 要播放的歌曲列表
    fullScreen: true, // 大屏小屏
    currentIndex: -1, // 当前正在播放那首歌,
    loop: 0 // 0单曲，1循环，2随机
  },
  mutations: {
    // 控制大屏小屏切换
    changeScreen (state, screenState) {
      state.fullScreen = screenState
    },
    // 添加播放列表
    addSongList (state, params) {
      // params 要播放的歌曲列表
      // 排除掉已存在的歌曲
      const fparams = params.filter(ele => {
        return !state.songList.some(item => ele.songmid === item.songmid)
      })
      if (fparams.length) {
        state.songList.unshift(...fparams)
        state.currentIndex = 0
      } else {
        state.currentIndex = state.songList.findIndex(ele => ele.songmid === params[0].songmid)
      }
    },
    deleteSongList (state, index) {
      if (state.currentIndex > index) {
        state.currentIndex--
      }
      state.songList.splice(index, 1)
    },
    clearSongList (state) {
      state.currentIndex = -1
      state.songList = []
    },
    changeCurrentIndex (state, index) {
      // 修改当前正在播放那首歌
      state.currentIndex = index
    },
    nextCurrentIndex (state) {
      state.currentIndex = (state.currentIndex + 1) % state.songList.length
    },
    prevCurrentIndex (state) {
      if (state.currentIndex > 0) {
        state.currentIndex--
      } else {
        state.currentIndex = state.songList.length - 1
      }
    },
    changeLoop (state) {
      // 修改循环模式
      state.loop = (state.loop + 1) % 3
    }
  },
  getters: {
    currentSong (state) {
      // 当前正在播放的那首歌
      return state.songList[state.currentIndex] || null
    }
  },
  actions: {
  },
  modules: {
  }
})
