<template>
  <div class="column is-12">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Title Image</label>
      </div>
      <div class="field-body">
        <input class="input" type="text" placeholder="Image URL" :value="titleImage.value" @input="update" :class="validClasses(titleImage)">
      </div>
    </div>
    <p v-if="titleImage.feedback" class="help is-danger has-text-right">{{ titleImage.feedback }}</p>
  </div>
</template>

<script>
  import { validClasses, validateImage } from '@/helpers'

  export default {
    name: 'TitleImageInput',
    computed: {
      titleImage() {
        return this.$store.state.newBlog.titleImage
      }
    },
    methods: {
      validClasses,
      update({ target: { value } }) {
        let  payload
        if (validateImage(value)) {
          payload = { value, feedback: null }
        } else {
          payload = { value, feedback: 'Not a valid URL' }
        }
        this.$store.commit('updateTitleImage', payload)
      }
    }
  }
</script>