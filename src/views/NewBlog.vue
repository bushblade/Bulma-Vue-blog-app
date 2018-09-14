<template>
  <div>
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <h1 class="is-size-1 has-text-centered">Create a new blog post</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column input-fields">
        <AuthorDateTitle />
        <Keywords />
        <TitleImageInput />
        <ContentEditable />
        <Controls />
      </div>
    </div>
  </div>
</template>

<script>
  import AuthorDateTitle from '@/components/NewBlog/AuthorDateTitle'
  import TitleImageInput from '@/components/NewBlog/TitleImageInput'
  import Keywords from '@/components/NewBlog/Keywords'
  import Controls from '@/components/NewBlog/Controls'
  import ContentEditable from '@/components/NewBlog/ContentEditable'

  export default {
    name: 'NewBlog',
    data() {
      return {

      }
    },
    components: {
      AuthorDateTitle,
      TitleImageInput,
      Keywords,
      Controls,
      ContentEditable
    },
    computed: {
      titleImagePreview() {
        return this.$store.state.newBlog.titleImage.preview
      }
    }
  }
</script>