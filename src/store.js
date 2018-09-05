import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navOpen: false

  },
  mutations: {
    toggleNav: state => state.navOpen = !state.navOpen,
    closeNav: state => state.navOpen = false
  },
  actions: {

  }
})
