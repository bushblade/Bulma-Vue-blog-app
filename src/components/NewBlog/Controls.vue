<template>
  <div class="column is-12">
    <div class="buttons has-addons">
      <span class="button" @click="publishBlog">Publish</span>
    </div>
  </div>
</template>

<script>
import { db, auth } from '@/firebase/init'
import { createBlogToPublish } from '@/helpers'

  export default {
    name: 'Controls',
    methods: {
      publishBlog() {
        this.$store.commit('validateBlog')
        if (this.$store.state.newBlog.valid) {
          const toPublish = createBlogToPublish(this.$store.state.newBlog) 
          db.collection('blogs').add(toPublish)
          .then(res => {
            this.$store.commit('resetNewBlog')
            this.$router.push(`${toPublish.slug}`)
          })
          .catch(err => console.log(err))
        }
      }
    }
  }
</script>