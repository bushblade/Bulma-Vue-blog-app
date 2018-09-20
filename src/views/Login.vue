<template>
  <div class="container login">
    <form>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <br>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Email" v-model.trim="email">
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="Password" v-model.trim="password">
            </div>
          </div>
          <div class="field">
            <button class="button is-primary is-fullwidth" @click.prevent="submit">Submit</button>
          </div>
          <p class="has-text-danger" v-if="feedback">
            {{ feedback }}
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import { auth } from '@/firebase/init'

  export default {
    name: 'Login',
    data() {
      return {
        email: null,
        password: null,
        feedback: null
      }
    },
    methods: {
      submit() {
       auth.signInWithEmailAndPassword(this.email, this.password)
       .then(res => {
         this.feedback = null
         this.$router.push('/blog-home')
       })
       .catch(err => this.feedback = err.message)
      }
    }
  }
</script>