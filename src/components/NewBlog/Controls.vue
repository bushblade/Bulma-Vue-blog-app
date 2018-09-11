<template>
  <div class="column is-12">
    <div class="buttons has-addons">
      <span class="button" v-for="(btn,indx) of controls"
       :key="indx"
       @click="buttonAction(btn.fn, btn.type)"
       >{{ btn.text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Controls',
    data() {
      return {
        controls: [{
          text: 'Add Paragraph',
          fn: 'addField',
          type: 'p'
        },
        {
          text: 'Add Image',
          fn: 'addField' ,
          type: 'i'
        },
        {
          text: 'Publish',
          fn: 'publishBlog'
        }]
      }
    },
    methods: {
      buttonAction(commitName, type = null) {
        this.$store.commit(commitName, type)
      }
    }
  }
</script>