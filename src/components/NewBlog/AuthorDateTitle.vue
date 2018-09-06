<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(field, indx) in fields" :key="indx">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">{{ field.label }}</label>
        </div>
        <div class="field-body">
          <input class="input" type="text" :placeholder="field.label" :value="field.val.value" @input="field.fn" :class="validClasses(field)">
        </div>
      </div>
      <p v-if="field.val.feedback" class="help is-danger has-text-centered">{{ field.val.feedback }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthorDateTitle',
    computed: {
      fields() {
        let blog = this.$store.state.newBlog,
          commit = this.$store.commit
        return [{
            label: 'Author',
            val: blog.author,
            fn: (e) => commit('update', {target: 'author', value: e.target.value})
          },
          {
            label: 'Date',
            val: blog.date,
            fn: (e) => commit('update', {target: 'date', value: e.target.value})
          },
          {
            label: 'Title',
            val: blog.title,
            fn: (e) => commit('update', {target: 'title', value: e.target.value})
          }
        ]
      }
    },
    methods: {
      validClasses(field) {
        return {
          'is-danger': field.val.feedback,
          'is-success': !field.val.feedback && field.val.value
        }
      }
    }
  }
</script>