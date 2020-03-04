import Vue from 'vue'
import VueRouter from 'vue-router'
import recommend from './recommend'
import singer from './singer'
import rank from './rank'
import search from './search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/commend'
  },
  recommend,
  singer,
  rank,
  search

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
