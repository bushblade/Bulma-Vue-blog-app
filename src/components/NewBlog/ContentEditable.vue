<template>
  <div class="column content-editable">
    <div class="card">
      <header class="card-header">
      </header>
      <div id="content-edit" class="card-content content" contenteditable="true" @input="updateContent">       
      </div>
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
  .content-editable .card-content {
    min-height: 400px;
  }

  .content-editable .card {
    margin-bottom: 40px;
  }
</style>

