import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase/init'
import { navstate } from '@/storeModules/navstate'
import { newBlog } from '@/storeModules/newBlog'
import { user } from '@/storeModules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allBlogs: []
  },
  mutations: {
    setBlogs: (state, { blogs }) => state.allBlogs = blogs
  },
  actions: {
    getBlogs: state => {
      db.collection('blogs').onSnapshot(rawBlogs => {
        let blogs = rawBlogs.docs.map(doc => {
            let blogData = doc.data()
            blogData.id = doc.id
            return blogData
          })
          .sort((a, b) => {
            let aDate = new Date(a.date)
            let bDate = new Date(b.date)
            return bDate - aDate
          })
        state.commit('setBlogs', { blogs })
        console.log('updating blogs')
      })
    }
  },
  modules: {
    navstate,
    newBlog,
    user
  }
})