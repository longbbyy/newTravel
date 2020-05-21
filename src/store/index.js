import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var defaultCity = '上海'
if (localStorage.city) {
  console.log(defaultCity)
  defaultCity = localStorage.city
}

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  },
  actions: {
    changeCity (s, city) {
      s.commit('changeCity', city)
    }
  },
  modules: {
  }
})
