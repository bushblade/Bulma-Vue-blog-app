<template>
  <div class="column content-editable">
    <label class="label">Create your content</label> 
    <div id="content-edit" class="box content" contenteditable="true" @input="updateContent">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContentEditable',
    computed: {
      commands() {
        return commands
      }
    },
    methods: {
      updateContent(e) {
        let HTML = e.target.innerHTML
        this.$store.commit('updateContent', HTML)
      }
    },
    mounted() {
      if (this.$store.state.newBlog.content) {
        document.getElementById('content-edit').innerHTML = this.$store.state.newBlog.content
      }
    }
  }
</script>

<style>
  #content-edit {
    margin-bottom: 40px;
    min-height: 400px;
  }
</style>