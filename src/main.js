import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css/animate.css'
import './assets/sass/styles.scss'
import 'bulma-tooltip'
import 'bulma-switch'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
