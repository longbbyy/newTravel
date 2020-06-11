import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/commons/css/reset.css'
import '@/assets/commons/style.css'
import '@/assets/commons/css/index.scss'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
