import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Scroller from '@/components/Scroller'
import {
  Icon,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant'

Vue.use(Icon)
  .use(Tab).use(Tabs)
  .use(Swipe).use(SwipeItem)
Vue.use(Lazyload, {
  lazyComponent: true,
  loading: '/favicon.ico'
})
Vue.config.productionTip = false

Vue.component('Scroller', Scroller)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
