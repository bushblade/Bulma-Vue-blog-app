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
          <button class="button is-small is-primary" @click="publishBlog">Publish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { db } from '@/firebase/init'
  import { createBlogToPublish } from '@/helpers'
  import CEControls from './CEControls'

  export default {
    name: 'Controls',
    components: {
      CEControls
    },
    methods: {
      publishBlog() {
        const { state, commit } = this.$store
        commit('validateBlog', { published: true })
        if (state.newBlog.valid) {
          const toPublish = createBlogToPublish(state.newBlog)
          db.collection('blogs').add(toPublish)
            .then(res => {
              commit('resetNewBlog', state.defaultBlog)
              this.$router.push('/blog-home')
            })
            .catch(err => console.log(err))
        }
      }
    }
  }
</script>

<style>

</style>