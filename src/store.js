import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '@/firebase/init'
import { navstate } from '@/storeModules/navstate'
import { newBlog } from '@/storeModules/newBlog'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: null
    },
    allBlogs: []
  },
  mutations: {
    setBlogs: (state, { blogs }) => state.allBlogs = blogs,
    setUser: ({ user }, { name }) => {
      user.name = name
      console.log(user.name)
    }
  },
  actions: {
    getBlogs: state => {
      db.collection('blogs').get().then(rawBlogs => {
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
      })
    },
    login: ({ commit }, { email, password }) => {
      auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
          let userId = cred.user.uid
          console.log(userId)
          db.collection('users').get().then(snapshot => {
            let user = snapshot.docs.find(doc => doc.id === userId)
            console.log(user.data())
            commit('setUser', user.data())            
          })
        }).catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
    navstate,
    newBlog
  }
})