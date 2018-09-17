<template>
  <div class="navbar is-fixed-bottom is-dark controls">
    <div class="container">
      <div class="navbar-start">
        <div class="navbar-item">
          <CEControls />
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <span class="button is-small is-primary" @click="publishBlog">Publish</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { db, auth } from '@/firebase/init'
  import { createBlogToPublish } from '@/helpers'
  import CEControls from './CEControls'

  export default {
    name: 'Controls',
    components: {
      CEControls
    },
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

<style>

</style>