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
        const commit = this.$store.commit
        let imageField = {
          type: 'image',
          value: null,
          feedBack: null,
          preview: 'https://via.placeholder.com/640x300',
          id: Symbol()
        },
        textField = {
          type: 'text',
          value: null,
          id: Symbol()
        }
        if (type === 'p') commit(commitName, textField)
        else if (type === 'i') commit(commitName, imageField)
        else commit(commitName)
      }
    }
  }
</script>