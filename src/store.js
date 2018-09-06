import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '@/firebase/init'
import  {navstate} from '@/storeModules/navstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Default Name'
    },
    allBlogs: []
  },
  mutations: {
    setBlogs: (state, payload) => state.allBlogs = payload.blogs
  },
  actions: {
    getBlogs: state => {
      db.collection('blogs').get().then(rawBlogs => {
        let blogs = rawBlogs.docs.map(doc => doc.data())
        state.commit('setBlogs', { blogs })
      })
    }
  },
  modules: {
    navstate
  }
})
