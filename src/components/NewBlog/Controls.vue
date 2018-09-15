<template>
  <div class="column is-12">
    <div class="buttons has-addons">
      <span class="button" @click="publishBlog">Publish</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Controls',
    data() {
      return {}
    },
    methods: {
      publishBlog() {
        if (this.$store.commit('validateBlog')) {
          console.log('valid')
        } else {
          console.log('not valid')
        }
      }
    }
  }
</script>