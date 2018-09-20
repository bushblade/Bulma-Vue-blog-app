<template>
  <div class="container login">
    <form>
      <div class="columns is-centered">
        <div class="column is-5">
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
          <transition tag="div" mode="out-in" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
            <article class="message" :class="style" v-if="feedback">
              <div class="message-body">
                {{ feedback }}
              </div>
            </article>
          </transition>
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
        feedback: null,
        style: null
      }
    },
    methods: {
      submit() {
        this.feedback = null
        if (this.email && this.password) {
          auth.signInWithEmailAndPassword(this.email, this.password)
            .then(res => {
              this.feedback = 'Success!'
              this.style = 'is-success'
              setTimeout(() => this.$router.push('/blog-home'), 1500)
            })
            .catch(err => {
              this.feedback = err.message
              this.style = 'is-danger'
            })
        } else {
          this.feedback = 'Fill out both fields'
          this.style = 'is-danger'
        }
      }
    }
  }
</script>

<style>
  .login {
    margin-top: 3em;
  }
</style>