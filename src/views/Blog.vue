<template>
  <div class="container">
    <div class="columns">
      <div class="column is-10 is-offset-1" v-if="blog">
        <img :src="blog.titleImage" :alt="blog.title">
      </div>
    </div>
    <div class="columns blog-content">
      <div class="column is-8 is-offset-2">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content has-text-centered">
                <h3 class="title">{{ blog.title }}</h3>
                <h5 class="subtitle">By {{ blog.author }} on {{ blog.date }}</h5>
              </div>
            </div>
            <p>{{ blog.mainText }}</p>
            <div v-for="(entry, indx) of blog.content" :key="indx">
              <p v-if="entry.type === 'text'">{{ entry.value }}</p>
              <div v-if="entry.type === 'image'" class="has-text-centered">
                <img :src="entry.src">
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
    name: 'Blog',
    blog: null,
    computed: {
      blog() {
        return this.$store.state.allBlogs.find(blog => blog.slug === this.$route.params.blog_slug)
      }
    },
    created() {
      if (this.$store.state.allBlogs.length === 0) this.$store.dispatch('getBlogs')
    }
  }
</script>

<style>
  .blog-content {
    margin-top: -200px;
  }
  .blog-content p {
    margin: 2em;
  }
  .blog-content img {
    max-width: 80%;
  }
</style>