<template>
  <div class="column content-editable">
    <div class="card">
      <header class="card-header">
        <div class="buttons">
          <span class="button is-small tooltip is-tooltip-right" v-for="(btn, indx) of commands" :key="indx" :data-tooltip="btn.desc" @click="btnAction(btn.cmd, btn.val)">
            <span class="icon">
              <i class="material-icons">{{ btn.icon }}</i>
            </span>
          </span>
        </div>
      </header>
      <div id="content-edit" class="card-content content" contenteditable="true" @input="updateContent">

      </div>
    </div>
  </div>
</template>

<script>
  import { commands } from './ce-commands'

  export default {
    name: 'ContentEditable',
    data() {
      return {

      }
    },
    computed: {
      commands() {
        return commands
      }
    },
    methods: {
      btnAction(cmd, val = null) {
        let value = val ? prompt(`Value for ${cmd}?`, val) : ''
        document.execCommand(cmd, false, value)
      },
      updateContent(e) {
        this.content = null
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
</style>