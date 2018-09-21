import { db, auth } from '@/firebase/init'

export const user = {
  state: {
    name: '',
    admin: false
  },
  mutations: {
    setUser: (context, { name, admin }) =>{
      context.name = name
      context.admin = admin
    }
  },
  actions: {
    watchAuthState: ({ commit }) => {
      auth.onAuthStateChanged(user => {
        if(user) {
          db.collection('users').doc(user.uid).get().then(res => {
            commit('setUser', res.data())
          }).catch(err => console.log(err))
        } else {
          commit('setUser', {name: '', admin: false})
        }
      })
    }
  }
}