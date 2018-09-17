<template>
  <div class="buttons">
    <span class="button is-small tooltip is-tooltip-right" v-for="(btn, indx) of commands" :key="indx" :data-tooltip="btn.desc" @click="btnAction(btn.cmd, btn.val)">
      <span class="icon">
        <i class="material-icons">{{ btn.icon }}</i>
      </span>
    </span>
  </div>
</template>

<script>
  import { commands } from './ce-commands'

  export default {
    name: 'CEControls',
    computed: {
      commands() {
        return commands
      }
    },
    methods: {
      btnAction(cmd, val = null) {
        let value = val ? prompt(`Value for ${cmd}?`, val) : ''
        document.execCommand(cmd, false, value)
      }
    }
  }
</script>

<style>
  .content-editable .card-content {
    min-height: 400px;
  }
</style>