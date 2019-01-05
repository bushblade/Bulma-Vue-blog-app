<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-2" v-for="image of images" :key="image.name">
        <img :src="image.src">
      </div>
    </div>
  </div>
</template>

<script>
  import { storage, db } from '@/firebase/init'

  export default {
    name: 'Media',
    data() {
      return {
        images: []
      }
    },
    methods: {

    },
    computed: {

    },
    created() {
      db.collection('all-images').onSnapshot(snapshot => {
        this.images = snapshot.docs.map(doc => doc.data())
      })
    }
  }
</script>