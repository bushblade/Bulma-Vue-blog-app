<template>
  <div class="column">
    <div class="columns is-multiline is-vcentered is-mobile">
      <div class="column is-7">
        <div class="file has-name is-boxed" :class="validClass">
          <label class="file-label">
            <input class="file-input" type="file" @input="addTitleImage">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                {{ titleImage.value ? 'Change title image' : 'Add a title image…' }}
              </span>
            </span>
            <span class="file-name">
              {{ titleImage.value ? titleImage.value.name : 'No image added' }}
            </span>
          </label>
        </div>
        <p v-if="titleImage.feedback" class="help is-danger">{{ titleImage.feedback }}</p>
      </div>
      <div class="column is-5">
        <figure class="image is-4by3">
          <img class="preview-thumbnail" :src="titleImage.preview">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TitleImage',
    computed: {
      titleImage() {
        return this.$store.state.newBlog.titleImage
      },
      validClass() {
        const { feedback, value } = this.$store.state.newBlog.titleImage
        return {
          'is-danger': feedback,
          'is-success': !feedback && value
        }
      }
    },
    methods: {
      addTitleImage(e) {
        this.$store.commit('setTitleImage', { payload: e.target.files[0] })
      }
    }
  }
</script>

<style>
  .preview-thumbnail {
    object-fit: cover;
  }

</style>