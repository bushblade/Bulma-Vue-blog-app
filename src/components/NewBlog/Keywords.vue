<template>
  <div class="column is-12">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Keywords</label>
      </div>
      <div class="field-body">
        <input class="input" type="text" placeholder="Enter,comma,seperated,values" :value="keywordsText(keywords)" @input="addKeywords"
          :class="validClass(keywords)">
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
      }
    },
    methods: {
      addKeywords(e) {
        let val = e.target.value.length > 0 ? e.target.value.split(',') : null 
        this.$store.commit('updateKeywords', val)
      },
      keywordsText(keywordsArr) {
        if (keywordsArr) return keywordsArr.join(',')
      },
      validClass(keywordsArr) {
        return {
          'is-success': keywordsArr
        }
      }
    }
  }
</script>