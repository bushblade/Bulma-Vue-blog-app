<template>
  <div class="level is-mobile admin-controls">
    <div class="level-left">
      <div class="level-item">
        <input :id="blog.id" type="checkbox" class="switch is-success is-thin" :checked="blog.published" @input="togglePublished($event, blog)">
        <label :for="blog.id">{{ blog.published ? 'Published' : 'Not published' }}</label>
      </div>

    </div>
    <div class="level-right">
      <div class="level-item">
        <button class="button is-danger is-small is-rounded tooltip" data-tooltip="Delete blog from database">
          <i class="material-icons">delete</i>
        </button>
      </div>
      <div class="level-item">
        <button class="button is-warning is-small is-rounded tooltip" data-tooltip="Edit blog">
          <i class="material-icons">edit</i>
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
            this.$store.dispatch('getBlogs')
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
</style>