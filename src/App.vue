<template>
  <div id="app">
    <Navbar />
    <transition tag="div" class="container" name="router">
      <router-view @click.native="closeNav" />
    </transition>
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
 .router-enter, .router-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.router-leave-active {
  position: absolute;
}

</style>