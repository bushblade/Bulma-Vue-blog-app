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
    methods: {
      publishBlog() {
        this.$store.commit('validateBlog')
        if (this.$store.state.newBlog.valid) {
          console.log('valid')
          const toPublish = {}
          let blog = this.$store.state.newBlog
          for (let key in blog){
            if (blog[key].value){
              toPublish[key] = blog[key].value
            } else {
              toPublish[key] = blog[key]
            }
          } 
          console.log(toPublish)
        } else {
          console.log('not valid')
        }
      }
    }
  }
</script>