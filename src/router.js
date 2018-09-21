import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BlogHome from './views/BlogHome.vue'
import About from './views/About'
import Blog from './views/Blog'
import NewBlog from './views/NewBlog'
import Login from './views/Login'
import { auth } from '@/firebase/init'

Vue.use(Router)

const router = new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: [{
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
      component: NewBlog,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/:blog_slug/edit',
      name: 'EditBlog',
      component: NewBlog,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:blog_slug',
      name: 'Blog',
      component: Blog
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(path => path.meta.requiresAuth)) {
    auth.currentUser ? next() : next({ name: 'Login' })
  } else {
    next()
  }
})

export default router