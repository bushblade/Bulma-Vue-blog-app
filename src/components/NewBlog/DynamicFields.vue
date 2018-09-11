<template>
  <div class="column is-12">
    <transition-group tag="div" class="columns is-multiline" name="dyno-field">
      <div class="column is-12 dyno-field-item" v-for="(field, index) of fields" :key="field.id">
        <div class="columns is-multiline">

          <!-- text field -->
          <div class="column is-12" v-if="field.type === 'text'">
            <textarea class="textarea" :value="field.value" @input="updateTextField($event, index)"></textarea>
          </div>

          <!-- image field -->
          <div class="column is-12" v-if="field.type === 'image'">
            <div class="columns is-multiline is-vcentered is-mobile">
              <div class="column is-7">
                <div class="file has-name is-boxed" :class="validClasses(field)">
                  <label class="file-label">
                    <input class="file-input" type="file" @input="updateImageField($event, index)">
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">
                        {{ field.value ? 'Change image' : 'Add a image…' }}
                      </span>
                    </span>
                    <span class="file-name">
                      {{ field.value ? field.value.name : 'No image added' }}
                    </span>
                  </label>
                </div>
                <p v-if="field.feedback" class="help is-danger">{{ field.feedback }}</p>
              </div>
              <div class="column is-5">
                <figure class="image is-4by3">
                  <img class="preview-thumbnail" :src="field.preview">
                </figure>
              </div>
            </div>
          </div>

          <!-- controls -->
          <div class="column is-12">
            <div class="buttons is-centered">
              <span class="button is-small" v-for="btn of buttons" :key="btn.icon" @click="buttonAction(btn.action, index)">
                <span class="icon">
                  <i :class="btn.icon"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  import { validClasses } from './helpers'

  export default {
    name: 'DynamicFields',
    data() {
      return {
        buttons: [{
            icon: 'fas fa-trash',
            action: 'deleteField'
          },
          {
            icon: 'fas fa-chevron-up',
            action: 'moveFieldUp'
          },
          {
            icon: 'fas fa-chevron-down',
            action: 'moveFieldDown'
          }
        ]
      }
    },
    computed: {
      fields() {
        return this.$store.state.newBlog.content
      }
    },
    methods: {
      validClasses,
      updateTextField({ target: { value } }, index) {
        this.$store.commit('updateTextField', { value, index })
      },
      updateImageField({ target: { files } }, index) {
        this.$store.commit('updateImagefield', { files, index })
      },
      buttonAction(action, index) {
        this.$store.commit(action, { index })
      }
    }
  }
</script>

<style>
  .dyno-field-item {
    transition: all 0.5s;
  }

  .dyno-field-enter,
  .dyno-field-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }

  .dyno-field-leave-active {
    /* position: absolute; */
    height: 0;
    padding-top: 0;
    padding-bottom: 0;
    opacity: 0;
    font-size: 0;
    color: transparent;
  }
</style>