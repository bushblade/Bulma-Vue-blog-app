<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <h1 class="is-size-1 has-text-centered">Create a new blog post</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half input-fields">
        <Keywords />
        <Inputs />
      </div>
      <div class="column is-half has-text-centered">
          <img id="title-image-preview" class="title-image-preview" :src="titleImagePreview">
      </div>
    </div>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <ContentEditable />
        <Controls />
      </div>
    </div>
  </div>
</template>

<script>
  import Inputs from '@/components/NewBlog/Inputs'
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
      Inputs,
      Keywords,
      Controls,
      ContentEditable
    },
    computed: {
      titleImagePreview() {
        let preview = this.$store.state.newBlog.titleImage.value 
        return preview ? preview : 'https://via.placeholder.com/1000x700'
      }
    }
  }
</script>

<style>
 .title-image-preview {
   max-height: 300px;
   width: auto;
 }
</style>
