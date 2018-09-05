import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '@/firebase/init'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navOpen: false,
    user: {
      name: 'Default Name'
    },
    allBlogs: []
  },
  mutations: {
    toggleNav: state => state.navOpen = !state.navOpen,
    closeNav: state => state.navOpen = false,
    setBlogs: (state, payload) => state.allBlogs = payload.blogs
  },
  actions: {
    getBlogs: state => {
      db.collection('blogs').get().then(rawBlogs => {
        let blogs = rawBlogs.docs.map(doc => doc.data())
        state.commit('setBlogs', { blogs })
      })
    }
  }
})
