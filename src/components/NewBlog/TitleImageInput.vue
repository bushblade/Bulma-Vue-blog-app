<template>
  <div class="column">
    <div class="columns is-multiline">
      <div class="column is-8">
        <div class="file has-name is-fullwidth" :class="validClass">
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
      <div class="column is-4">
        <figure class="image is-4by3">
          <img :src="titleImage.preview">
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
        let titleImage = this.$store.state.newBlog.titleImage
        return {
          'is-danger': titleImage.feedback,
          'is-success': !titleImage.feedback && titleImage.value
        }
      }
    },
    methods: {
      addTitleImage(e) {
        this.$store.commit('setTitleImage', e.target.files[0])
      }
    }
  }
</script>

<style>


</style>