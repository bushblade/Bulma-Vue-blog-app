<template>
  <div id="app">
    <Navbar />
    <transition tag="div" mode="out-in" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <router-view @click.native="closeNav" />
    </transition>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import { auth, db } from '@/firebase/init'

  export default {
    components: {
      Navbar
    },
    methods: {
      closeNav() {
        if (this.$store.state.navstate.navOpen) {
          this.$store.commit('closeNav')
        }
      }
    },
    created() {
      this.$store.dispatch('watchAuthState')
    }

  }
</script>


<style>

</style>