<template>
  <div class="column is-12" v-if="blog">
    <div class="columns">
      <div class="column is-12">
        <img :src="blog.titleImage.preview">
      </div>
    </div>
    <div class="columns blog-content">
      <div class="column is-12">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content has-text-centered">
                <h3 class="title">{{ blog.title.value }}</h3>
                <h5 class="subtitle">By {{ blog.author.value }} on {{ blog.date.value }}</h5>
              </div>
            </div>
            <p>{{ blog.mainText.value }}</p>
            <div v-for="(entry, indx) of blog.content" :key="indx">
              <p v-if="entry.type === 'text'">{{ entry.value }}</p>
              <div v-if="entry.type === 'image'" class="has-text-centered">
                <img :src="entry.preview">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Preview',
    computed: {
      blog(){
        return this.$store.state.newBlog
      }
    }
  }
</script>