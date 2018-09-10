<template>
  <transition-group tag="div" class="columns is-multiline">
    <div class="column is-12" v-for="(field, index) of fields" :key="field.id">
      <div class="columns is-multiline">
        <div class="column is-12">
          <!-- input -->
        </div>
        <div class="column is-12">
          <!-- controls -->
          <div class="buttons is-centered">
            <span class="button is-small"
             v-for="btn of buttons"
             :key="btn.icon">
              <span class="icon">
                <i :class="btn.icon"></i>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'DynamicFields',
  data(){
    return {
      buttons: [
        {
          icon: 'fas fa-trash'
        },
        {
          icon: 'fas fa-chevron-up'
        },
        {
          icon: 'fas fa-chevron-down'
        }
      ]
    }
  },
  computed: {
    fields(){
      return this.$store.state.newBlog.content
    }
  }
}
</script>

