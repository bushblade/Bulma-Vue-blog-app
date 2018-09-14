<template>
  <div class="column content-editable">
    <div class="card">
      <header class="card-header">
        <p>controls to go in here</p>
      </header>
      <div class="card-content" contenteditable="true">

      </div>
    </div>
  </div>
</template>

<script>
import commands from './ce-commands'

  export default {
    name: 'ContentEditable',
    data() {
      return {
        commands
      }
    }
  }
</script>

<style>
  .content-editable .card-content {
    min-height: 400px;
  }
</style>