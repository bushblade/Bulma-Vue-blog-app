<template>
  <div class="container">
    <img :src="titleImagePreview">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <h1 class="is-size-1 has-text-centered">Create a new blog post</h1>
      </div>
    </div>
    <AuthorDateTitle />
    <div class="columns">
      <TitleImageInput />
      <Keywords />
    </div>
  </div>
</template>

<script>
  import AuthorDateTitle from '@/components/NewBlog/AuthorDateTitle'
  import TitleImageInput from '@/components/NewBlog/TitleImageInput'
  import Keywords from '@/components/NewBlog/Keywords'

  export default {
    name: 'NewBlog',
    data() {
      return {

      }
    },
    components: {
      AuthorDateTitle,
      TitleImageInput,
      Keywords
    },
    computed: {
      titleImagePreview() {
        return this.$store.state.newBlog.titleImage.preview
      }
    }
  }
</script>