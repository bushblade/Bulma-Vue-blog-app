<template>
  <div class="column is-12">
    <div class="columns is-multiline">
      <div class="column is-12" v-for="(field, indx) in fields" :key="indx">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">{{ field.text }}</label>
          </div>
          <div class="field-body">
            <input class="input" type="text" :placeholder="field.placeHolder ? field.placeHolder : field.text" :value="field.val.value" @input="updateField($event, field)" :class="validClasses(field.val)">
          </div>
        </div>
        <p v-if="field.val.feedback" class="help is-danger has-text-centered">{{ field.val.feedback }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { validClasses } from './helpers'

  export default {
    name: 'AuthorDateTitle',
    computed: {
      fields() {
        const { state: { newBlog: { author, date, title, titleImage } } } = this.$store
        return [{
            val: author,
            property: 'author',
            text: 'Author'
          },
          {
            val: date,
            property: 'date',
            text: 'Date'
          },
          {
            val: title,
            property: 'title',
            text: 'Title'
          },
          {
            val: titleImage,
            property: 'titleImage',
            text: 'Title Image',
            placeHolder: 'Image URL'
          }
        ]
      }
    },
    methods: {
      validClasses,
      updateField({ target: { value } }, { property }) {
        this.$store.commit('update', { property, value })
      }
    },
    created() {
      if (!this.$store.state.newBlog.date.value) {
        this.$store.commit('defaultDate')
      }
    }
  }
</script>