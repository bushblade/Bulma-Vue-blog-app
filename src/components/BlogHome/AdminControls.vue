<template>
  <div class="level is-mobile admin-controls">
    <div class="level-left">
      <div class="level-item">
        <input :id="blog.id" type="checkbox" class="switch is-success is-rounded is-outlined" :checked="blog.published" @input="togglePublished($event, blog)">
        <label :for="blog.id">{{ blog.published ? 'Published' : 'Not published' }}</label>
      </div>

    </div>
    <div class="level-right">
      <div class="level-item">
        <button class="button is-danger is-small tooltip" data-tooltip="Delete blog from database" @click="deleteBlog($event, blog)">
          <span class="icon"><i class="fas fa-trash"></i></span>
        </button>
      </div>
      <div class="level-item">
        <button class="button is-warning is-small tooltip" data-tooltip="Edit blog" @click="editBlog($event, {slug: blog.slug, id:blog.id})">
          <span class="icon"><i class="fas fa-pen"></i></span>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
  import { db, auth } from '@/firebase/init'

  export default {
    name: 'AdminControls',
    props: {
      blog: Object
    },
    methods: {
      togglePublished({ target: { checked } }, { id }) {
        db.collection('blogs').doc(id).update({ published: checked })
          .then(() => {
            console.log(`Blog ${id} published state is ${checked}`)
          })
      },
      deleteBlog(e, { id }) {
        if (confirm('Are you sure you want to permanently delete this blog?')) {
          db.collection('blogs').doc(id).delete()
            .then(() => {
              console.log(`blog with id ${id} was deleted`)
            })
        }
      },
      editBlog(e, { slug, id }) {
        const { state, commit } = this.$store
        db.collection('blogs').doc(id).get()
          .then(doc => {
            let document = doc.data()
            // need to check if a new blog is being worked on
            commit('resetNewBlog', state.defaultBlog)
            commit('setUpEditMode', { doc: document, id })
            this.$router.push(`/${slug}/edit`)
          })
      }
    }
  }
</script>

<style>
  .admin-controls {
    padding: 0.5em 1.5em;
    width: 100%;
  }

  .admin-controls .material-icons {
    font-size: 1.5em;
  }

  .admin-controls {
    background-color: whitesmoke;
  }
</style>