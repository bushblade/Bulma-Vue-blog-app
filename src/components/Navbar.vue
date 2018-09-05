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
          <router-link v-for="(link, index) in routerLinks"
           :key="index"
           class="navbar-item"
           active-class="is-active"
           :to="link.link" exact
           @click.native="closeNav"
           >{{ link.text }}</router-link>
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        routerLinks: [
          {link: '/', text: 'Home'},
          {link: '/about', text: 'About'},
          {link: '/blog-home', text: 'Blog'}
        ]
      }
    },
    computed: {
      active() {
        return this.$store.state.navOpen ? 'is-active' : ''
      }
    },
    methods: {
      toggleNav() {
        this.$store.commit('toggleNav')
      },
      closeNav() {
        this.$store.commit('closeNav')
      }
    }
  }
</script>