<template>
  <div class="column is-12">
    <textarea class="textarea" placeholder="Main text"
      :value="mainText.value"
      @input="updateMainText"
      :class="validClasses(mainText)"
    ></textarea>
    <p v-if="mainText.feedback" class="help is-danger has-text-centered">{{ mainText.feedback }}</p>
  </div>
</template>

<script>
import { validClasses } from './helpers'

export default {
  name: 'MainText',
  computed: {
    mainText(){
      return this.$store.state.newBlog.mainText
    }
  },
  methods: {
    updateMainText(e){
      this.$store.commit('update', { property: 'mainText', value: e.target.value })
    },
    validClasses
  }
}
</script>

