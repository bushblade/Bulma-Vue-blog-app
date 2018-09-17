<template>
  <div class="container">
    <div class="columns is-multiline blogs">
      <div class="column is-one-third" v-for="blog in blogs" :key="blog.slug">
        <div class="card blog-card">
          <div class="card-image">
            <figure class="image is-5by3">
              <router-link :to="blog.slug">
                <img :src="blog.titleImage" :alt="blog.title">
              </router-link>
            </figure>
          </div>
          <div class="card-content">
            <h3 class="title">{{ blog.title }}</h3>
            <h5 class="subtitle">{{ blog.author }} <em class="has-text-weight-light">{{ blog.date }}</em></h5>
            <p>{{ strip(blog.content) }}...</p>
            <router-link :to="blog.slug"><span class="tag is-link">Read More</span></router-link>
          </div>
          <!-- <div class="card-footer"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogHome',
    computed: {
      blogs() {
        return this.$store.state.allBlogs
      }
    },
    created() {
      this.$store.dispatch('getBlogs')
    },
    methods: {
      strip(str) {
        const nbs = /&nbsp;/gi
        const tags = /<.*?>/gi
        return str.replace(tags, '~')
          .replace(/~+/g, '~').split('~')
          .sort((a, b) => b.length - a.length)[0]
          .replace(nbs, '')
          .substr(0, 200)
      }
    }
  }
</script>

<style>
  .blogs {
    padding-top: 2rem;
  }

  .blogs .card-image img {
    object-fit: cover;
  }

  .blogs .blog-card {
    transition: all 0.2s ease-in-out;
  }

  .blogs .blog-card:hover {
    transform: scale(1.03) translateY(-2px);
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.4);
  }
</style>