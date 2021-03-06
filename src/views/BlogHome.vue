<template>
  <div class="container blogs">
    <BlogSearch v-model="searchText" />
    <transition-group tag="div" class="columns is-multiline" name="card-animation">
      <div class="column is-one-third-desktop is-half-tablet card-column" v-for="blog in blogs" :key="blog.id">
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
            <!-- <p>{{ strip(blog.content) }}...</p> -->
            <router-link :to="blog.slug"><span class="tag is-link">Read More</span></router-link>
          </div>
            <AdminControls v-if="user.admin" :blog="blog" />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  import BlogSearch from '@/components/BlogHome/BlogSearch'
  import AdminControls from '@/components/BlogHome/AdminControls'

  export default {
    name: 'BlogHome',
    components: {
      BlogSearch,
      AdminControls
    },
    data() {
      return {
        searchText: null
      }
    },
    computed: {
      blogs() {
        const { user, allBlogs } = this.$store.state 
        let blogs = user.admin ? allBlogs : allBlogs.filter(({ published }) => published)
        if (this.searchText) {
          return blogs.filter(({ author, title, keywords }) => {
            let searchTextArr = this.searchText.split(' '),
              joined = `${author} ${title} ${keywords ? keywords.join(' ') : ''}`
            return searchTextArr.every(word => joined.toLowerCase().includes(word.toLowerCase()))
          })
        } else {
          return blogs
        }
      },
      user() {
        return this.$store.state.user
      }
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
    padding-top: 0.5rem;
  }

  .blogs .card-image img {
    object-fit: cover;
  }

  .blogs .blog-card {
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.1);
  }

  .blogs .blog-card:hover {
    transform: scale(1.03) translateY(-2px);
    box-shadow: 0px 6px 12px 2px rgba(0, 0, 0, 0.2);
  }

  .card-animation-enter,
  .card-animation-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }

  .card-animation-leave-active {
    position: absolute;
  }

  .card-column {
    transition: all 0.5s;
  }
</style>