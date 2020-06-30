import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '@/pages/goods/goods.vue'
import rateing from '@/pages/rateing/rateing.vue'
import sell from '@/pages/sell/sell.vue'
import detail from '@/pages/header/headerDetail.vue'
import start from '@/pages/header/start.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'goods',
    component: goods
  },
  {
    path: '/rateing',
    name: 'rateing',
    component: rateing
  },
  {
    path: '/sell',
    name: 'sell',
    component: sell
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/start',
    name: 'start',
    component: start
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active'
})

export default router
