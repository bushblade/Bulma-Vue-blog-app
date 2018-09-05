<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <transition class="container" 
        mode="out-in" 
        enter-active-class="animated fadeIn faster" 
        leave-active-class="animated fadeOut faster">
        <router-view @click.native="closeNav" />
      </transition>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    components: {
      Navbar
    },
    methods: {
      closeNav() {
        this.$store.commit('closeNav')
      }
    }

  }
</script>


<style>

</style>