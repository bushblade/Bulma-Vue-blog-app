import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BlogHome from './views/BlogHome.vue'
import About from './views/About'
import Blog from './views/Blog'
import NewBlog from './views/NewBlog'

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
    },
    {
      path: '/new-blog',
      name: 'NewBlog',
      component: NewBlog
    },
    {
      path: '/:blog_slug',
      name: 'Blog',
      component: Blog
    }
  ]
})
