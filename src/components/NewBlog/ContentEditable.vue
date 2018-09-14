<template>
  <div class="column content-editable">
    <div class="card">
      <header class="card-header">
        <div class="buttons">
          <span class="button is-small" v-for="(btn, indx) of commands" :key="indx">
            <span class="icon">
              <i class="material-icons">{{ btn.icon }}</i>
            </span>
          </span>
        </div>
      </header>
      <div class="card-content" contenteditable="true">

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
      commands(){
        return commands
      }
    }
  }
</script>

<style>
  .content-editable .card-content {
    min-height: 400px;
  }
</style>