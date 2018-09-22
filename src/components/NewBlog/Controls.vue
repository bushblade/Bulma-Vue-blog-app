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
          <input id="published-toggle" type="checkbox" class="switch is-success is-thin" :checked="blog.published" @input="togglePublished">
          <label for="published-toggle">{{ blog.published ? 'Published' : 'Not published' }}</label>
        </div>
        <div class="navbar-item">
          <button class="button is-small is-primary"
           @click="publishOrUpdate">
           {{ blog.published ? 'Publish' : 'Save' }}
           </button>
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
    computed: {
      blog() {
        return this.$store.state.newBlog
      }
    },
    methods: {
      publishBlog() {
        const { state, commit } = this.$store
        commit('validateBlog')
        if (state.newBlog.valid) {
          const toPublish = createBlogToPublish(state.newBlog)
          db.collection('blogs').add(toPublish)
            .then(res => {
              commit('resetNewBlog', state.defaultBlog)
              this.$router.push('/blog-home')
            })
            .catch(err => console.log(err))
        }
      },
      update() {
        const { state, commit } = this.$store
        commit('validateBlog')
        if (state.newBlog.valid) {
          const toUpdate = createBlogToPublish(state.newBlog)
          db.collection('blogs').doc(state.newBlog.docID).set(toUpdate)
          .then(res => {
            commit('resetNewBlog', state.defaultBlog)
            this.$router.push(`/${toUpdate.slug}`)
          })
          .catch(err => console.log(err))
        }
      },
      togglePublished() {
        this.$store.commit('togglePublished')
      },
      publishOrUpdate(){
        this.$store.state.newBlog.isEditing ?
        this.update() :
        this.publishBlog()
      }
    }
  }
</script>

<style>

</style>