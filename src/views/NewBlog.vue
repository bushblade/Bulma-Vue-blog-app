<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <h1 class="is-size-1 has-text-centered">Create a new blog post</h1>
      </div>
    </div>
    <AuthorDateTitle />
  </div>
</template>

<script>
  import AuthorDateTitle from '@/components/NewBlog/AuthorDateTitle'

  export default {
    name: 'NewBlog',
    data() {
      return {

      }
    },
    components: {
      AuthorDateTitle
    }
  }
</script>