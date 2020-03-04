import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songList: [], // 要播放的歌曲列表
    fullScreen: true, // 大屏小屏
    currentIndex: -1 // 当前正在播放那首歌
  },
  mutations: {
    // 控制大屏小屏切换
    changeScreen (state, screenState) {
      state.fullScreen = screenState
    },
    // 添加播放列表
    addSongList (state, params) {
      // params 要播放的歌曲列表
      state.songList.unshift(...params)
    },
    changeCurrendIndex (state, index) {
      // 修改当前正在播放那首歌
      state.currentIndex = index
    },
    nextCurrendIndex (state) {
      if (state.currentIndex < state.songList.length - 1) { state.currentIndex++ }
    },
    prevCurrendIndex (state) {
      if (state.currentIndex > 0) { state.currentIndex-- }
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
