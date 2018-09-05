<template>
  <div class="container">
    <div class="columns is-multiline blogs">
      <div class="column is-one-third"
      v-for="blog in blogs" 
      :key="blog.slug">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img :src="blog.titleImage" :alt="blog.title">
            </figure>
          </div>
          <div class="card-content">
            <h3 class="title">{{ blog.title }}</h3>
            <h5 class="subtitle">{{ blog.author }} <em class="has-text-weight-light">{{ blog.date }}</em></h5>
            <p>{{ blog.mainText.substr(0, 180) }}...</p>            
            <router-link :to="blog.slug"><span class="tag is-link">Read More</span></router-link>
          </div>
          <div class="card-footer"></div>
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
    }
}
</script>

<style>
  .blogs {
    padding-top: 2rem;
  }
</style>

