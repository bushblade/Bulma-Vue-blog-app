<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="field">
        <div class="control has-icons-left">
          <input class="input is-rounded blog-search" type="text" placeholder="Filter blogs by keyword, author or title" v-model="searchText">
          <span class="icon is-small is-left">
            <i class="material-icons">search</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogSearch',
    data() {
      return {
        searchText: null
      }
    },
    watch: {
      searchText() {
        this.$emit('input', this.searchText)
      }
    }
  }
</script>