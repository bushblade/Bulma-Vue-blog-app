import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '@/firebase/init'
import  { navstate } from '@/storeModules/navstate'
import { newBlog } from '@/storeModules/newBlog'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Default Name'
    },
    allBlogs: []
  },
  mutations: {
    setBlogs: (state, { blogs }) => state.allBlogs = blogs
  },
  actions: {
    getBlogs: state => {
      db.collection('blogs').get().then(rawBlogs => {
        let blogs = rawBlogs.docs.map(doc => doc.data())
        .sort((a, b) => {
          let aDate = new Date(a.date)
          let bDate = new Date(b.date)
          return bDate - aDate
        })
        state.commit('setBlogs', { blogs })
      })
    }
  },
  modules: {
    navstate,
    newBlog
  }
})
