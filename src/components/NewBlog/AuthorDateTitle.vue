<template>
  <div class="columns">
    <div class="column is-one-third"
    v-for="(field, indx) in fields"
    :key="indx">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">{{ field.label }}</label>
        </div>
        <div class="field-body">
          <input class="input" type="text" :placeholder="field.label" :value="field.val.value">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthorDateTitle',
    data() {
      return {

      }
    },
    computed: {
      fields() {
        return [
          {label: 'Author', val: this.$store.state.newBlog.author},
          {label: 'Date', val: this.$store.state.newBlog.date},
          {label: 'Title', val: this.$store.state.newBlog.title}
        ]
      }
    }
  }
</script>