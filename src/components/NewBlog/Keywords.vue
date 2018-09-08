<template>
  <div class="column is-12">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Keywords</label>
      </div>
      <div class="field-body">
        <input class="input" type="text" placeholder="Keywords to search" :value="keywordsText" @input="addKeywords"
          :class="validClass">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Keywords',
    computed: {
      keywords() {
        return this.$store.state.newBlog.keywords
      },
      keywordsText() {
        let keywords = this.$store.state.newBlog.keywords
        if (keywords) return keywords.join(',')
      },
      validClass() {
        let keywords = this.$store.state.newBlog.keywords
        return {
          'is-success': keywords
        }
      }
    },
    methods: {
      addKeywords(e) {
        this.$store.commit('updateKeywords', e.target.value.split(','))
      }
    }
  }
</script>