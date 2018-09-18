import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'
import 'animate.css/animate.css'
import './assets/styles.css'
import 'bulma-tooltip'
import 'bulma-switch'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
