<template>
  <div class="container"  v-if="blog">
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <div class="level-item has-text-centered">
        <img :src="blog.titleImage">
        </div>
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
              <div class="content" v-html="blog.content"></div>
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
.blog-content p {
  margin: 2em;
}
.blog-content img {
  max-width: 80%;
}
</style>