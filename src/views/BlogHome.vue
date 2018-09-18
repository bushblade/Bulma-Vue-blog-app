<template>
  <div class="container blogs">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="field">
          <div class="control has-icons-left">
            <input class="input is-rounded blog-search" type="text" placeholder="Filter blogs by keyword, author or title" v-model="searchText">
            <span class="icon is-small is-left">
              <i class="material-icons">search</i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <transition-group tag="div" class="columns is-multiline" name="card-animation">
      <div class="column is-one-third-desktop is-half-tablet card-column" v-for="blog in blogs" :key="blog.id">
        <div class="card blog-card" v-if="blog.published">
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
          <!-- <div class="card-footer"></div> -->
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'BlogHome',
    data() {
      return {
        searchText: null
      }
    },
    computed: {
      blogs() {
        if (this.searchText) {
          return this.$store.state.allBlogs.filter(({ author, title, keywords }) => {
            let searchTextArr = this.searchText.split(' '),
              joined = `${author} ${title} ${keywords ? keywords.join(' ') : ''}`
            return searchTextArr.every(word => joined.toLowerCase().includes(word.toLowerCase()))
          })
        } else {
          return this.$store.state.allBlogs
        }
      }
    },
    created() {
      this.$store.dispatch('getBlogs').then(() => {
        // console.log(this.$store.state.allBlogs.map(blog => blog.keywords))
      })
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
  }

  .blogs .blog-card:hover {
    transform: scale(1.03) translateY(-2px);
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.4);
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