import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BlogHome from './views/BlogHome.vue'
import About from './views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog-home',
      name: 'BlogHome',
      component: BlogHome
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
