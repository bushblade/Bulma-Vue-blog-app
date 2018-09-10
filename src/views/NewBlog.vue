<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <h1 class="is-size-1 has-text-centered">Create a new blog post</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half input-fields">
        <AuthorDateTitle />
        <Keywords />
        <TitleImageInput />
        <DynamicFields />
        <Controls />
      </div>
      <div class="column is-half preview">
        
      </div>
    </div>
  </div>
</template>

<script>
  import AuthorDateTitle from '@/components/NewBlog/AuthorDateTitle'
  import TitleImageInput from '@/components/NewBlog/TitleImageInput'
  import Keywords from '@/components/NewBlog/Keywords'
  import Controls from '@/components/NewBlog/Controls'
  import DynamicFields from '@/components/NewBlog/DynamicFields'

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
      DynamicFields
    },
    computed: {
      titleImagePreview() {
        return this.$store.state.newBlog.titleImage.preview
      }
    }
  }
</script>