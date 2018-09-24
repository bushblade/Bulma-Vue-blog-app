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
          <span class="publish-toggle">
            <input id="published-toggle" type="checkbox" class="switch is-primary is-rounded is-outlined is-small" :checked="blog.published" @input="togglePublished">
            <label for="published-toggle">{{ blog.published ? 'To publish' : `Don't publish` }}</label>
          </span>
          <button class="button is-outlined is-primary is-small is-rounded" @click="publishOrUpdate">
            {{ publishButtonText }}
          </button>
          <button class="button is-outlined is-warning is-small is-rounded" @click="discardExit">
            Discard &amp; exit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { db } from '@/firebase/init'
  import { createBlogToPublish, defaultBlog } from '@/helpers'
  import CEControls from './CEControls'

  export default {
    name: 'Controls',
    components: {
      CEControls
    },
    computed: {
      blog() {
        return this.$store.state.newBlog
      },
      publishButtonText() {
        const { state: { newBlog: { published, isEditing } } } = this.$store
        if (isEditing) {
          return 'Update blog'
        } else if (published) {
          return 'Publish now'
        } else {
          return 'Save & exit'
        }
      }
    },
    methods: {
      discardExit() {
        const { commit } = this.$store
        let msg = 'Discard any changes made?'
        if (confirm(msg)) {
          commit('resetNewBlog', defaultBlog())
          this.$router.push('/blog-home')
        }
      },
      publishBlog(payload) {
        let check = this.$store.state.allBlogs
          .some(blog => blog.title.toLowerCase() === payload.title.toLowerCase())
        if (!check) {
          return db.collection('blogs').add(payload)
        } else {
          return new Promise((resolve, reject) => {
            reject(new Error('A blog with that title allready exists, choose a different title'))
          })
        }
      },
      update(payload) {
        return db.collection('blogs')
          .doc(this.$store.state.newBlog.docID)
          .set(payload)
      },
      togglePublished() {
        this.$store.commit('togglePublished')
      },
      publishOrUpdate() {
        const { state: { newBlog }, commit } = this.$store
        commit('validateBlog')
        if (newBlog.valid) {
          let payload = createBlogToPublish(newBlog)
          let fn = newBlog.isEditing ? this.update : this.publishBlog
          fn(payload).then(res => {
              commit('resetNewBlog', defaultBlog())
              this.$router.push(`/${payload.slug}`)
            })
            .catch(err => alert(err.message))
        }
      }
    }
  }
</script>

<style>
  .controls .publish-toggle {
    margin: 0 0.5em;
    color: whitesmoke;
  }

  .controls .navbar-end button {
    margin: 0 0.5em;
  }
</style>