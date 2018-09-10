<template>
  <div class="column is-12">
    <div class="buttons has-addons">
      <span class="button" v-for="(btn,indx) of controls"
       :key="indx"
       @click="btn.fn"
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
          fn: () => this.$store.commit('addField', 'p') 
        },
        {
          text: 'Add Image',
          fn: () => this.$store.commit('addField', 'i') 
        },
        {
          text: 'Save',
          fn: () => console.log('save clicked')
        },
        {
          text: 'Publish',
          fn: () => console.log(this.$store.state.newBlog)
        }]
      }
    }
  }
</script>