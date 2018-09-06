<template>
  <div class="columns">
    <div class="column is-one-third">
      <div class="file has-name">
        <label class="file-label">
          <input class="file-input" type="file" name="resume">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
          </span>
          <span class="file-name">
            Screen Shot 2017-07-29 at 15.54.25.png
          </span>
        </label>
      </div>
    </div>
    <div class="column is-two-thirds">

    </div>
  </div>

</template>

<script>
  export default {
    name: 'TitleImage',
    computed: {
      titleImage(){
        return this.$store.state.newBlog.titleImage
      }
    }
  }
</script>