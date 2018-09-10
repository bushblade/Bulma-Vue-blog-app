<template>
  <div class="column is-12">
    <div class="columns is-multiline">
      <div class="column is-12" v-for="(field, indx) in fields" :key="indx">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">{{ field.label }}</label>
          </div>
          <div class="field-body">
            <input class="input" type="text" :placeholder="field.label" :value="field.val.value" @input="field.fn"
              :class="validClasses(field.val)">
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
        let { author, date, title } = this.$store.state.newBlog,
          { commit } = this.$store
        return [{
            label: 'Author',
            val: author,
            fn: (e) => commit('update', {
              target: 'author',
              value: e.target.value
            })
          },
          {
            label: 'Date',
            val: date,
            fn: (e) => commit('update', {
              target: 'date',
              value: e.target.value
            })
          },
          {
            label: 'Title',
            val: title,
            fn: (e) => commit('update', {
              target: 'title',
              value: e.target.value
            })
          }
        ]
      }
    },
    methods: {
      validClasses
    },
    created() {
      if (!this.$store.state.newBlog.date.value) {
        this.$store.commit('defaultDate')
      }
    }
  }
</script>