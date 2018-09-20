<template>
  <nav class="navbar is-light">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item has-text-weight-bold is-uppercase" to="/">
          <span class="is-size-4">Blogg App</span>
        </router-link>
        <a class="navbar-burger" :class="active" @click="toggleNav">
          <span v-for="i in 3" :key="i"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="active">
        <div class="navbar-start">
          <router-link v-for="(link, index) in routerLinks" :key="index" class="navbar-item" active-class="is-active" :to="link.link" exact @click.native="closeNav">{{ link.text }}</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable" v-if="userLoggedIn">
            <a class="navbar-link">Admin</a>
            <div class="navbar-dropdown">
              <router-link to="/new-blog" class="navbar-item" @click.native="closeNav">
                Create new blog post
              </router-link>
              <a class="navbar-item" @click="logOut">Log Out</a>
            </div>
          </div>
          <router-link class="navbar-item" to="/login" @click.native="closeNav" v-else>Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { auth } from '@/firebase/init'

  export default {
    name: 'Navbar',
    data() {
      return {
        routerLinks: [
          { link: '/', text: 'Home' },
          { link: '/about', text: 'About' },
          { link: '/blog-home', text: 'Blog' }
        ]
      }
    },
    computed: {
      active() {
        return this.$store.state.navstate.navOpen ? 'is-active' : ''
      },
      userLoggedIn() {
        return this.$store.state.user.name.length > 0
      }
    },
    methods: {
      toggleNav() {
        this.$store.commit('toggleNav')
      },
      closeNav() {
        this.$store.commit('closeNav')
      },
      logOut() {
        this.closeNav()
        auth.signOut().then(res => {
          console.log(res)
        })
        this.$router.push('/login')
      }
    }
  }
</script>