import Vue from 'vue'
import Vuex from 'vuex'
import { db, auth } from '@/firebase/init'
import { navstate } from '@/storeModules/navstate'
import { newBlog } from '@/storeModules/newBlog'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: null,
      admin: false
    },
    allBlogs: []
  },
  mutations: {
    setBlogs: (state, { blogs }) => state.allBlogs = blogs,
    setUser: ({ user }, { name = null, admin = false }) =>{
      user.name = name
      user.admin = admin
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
          db.collection('users').doc(cred.user.uid).then(res => {
            commit('setUser', res.data())
          })
        }).catch(err => console.log(err))
    },
    watchAuthState: ({ commit }) => {
      auth.onAuthStateChanged(user => {
        let userData = {name: null, admin: false}
        db.collection('users').doc(user.uid).get().then(res => {
          userData = res.data()
          commit('setUser', userData)
        }).catch(err => console.log(err))
      })
    }
  },
  modules: {
    navstate,
    newBlog
  }
})