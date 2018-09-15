export const newBlog = {
  state: {
    author: {
      value: null,
      feedback: null,
      error: 'You must enter a user name'
    },
    date: {
      value: null,
      feedback: null,
      error: 'Enter a valid date'
    },
    title: {
      value: null,
      feedback: null,
      error: 'Enter a blog title'
    },
    titleImage: {
      value: null,
      feedback: null,
      preview: 'https://via.placeholder.com/640x300',
      error: 'You need a main image to post'
    },
    content: null,
    keywords: null,
    slug: null,
    valid: false
  },
  mutations: {
    update: (state, { property, value }) => {
      state[property].value = value.length > 0 ? value : null
      state[property].feedback = null
    },
    updateKeywords: (state, payload) => state.keywords = payload,
    defaultDate: state => {
      if (!state.date.value) {
        state.date.value = new Date().toDateString()
      }
    },
    setTitleImage: ({ titleImage }, payload) => {
      titleImage.value = payload.value
      titleImage.feedback = payload.feedback
      titleImage.preview = payload.preview
    },
    updateContent: (state, payload) => {
      state.content = payload
    },
    publishBlog: state => {
      let toValidate = Object.keys(state).filter((key, indx) => indx < 4)
      if (toValidate.every(key => state[key].value)) {
        state.valid = true
        console.log('Valid')
        console.log(state)
      } else {
        toValidate.forEach(key => {
          if (state[key].value === null) {
            state[key].feedback = state[key].error
          }
          state.valid = false
          console.log('not valid')
        })
      }
    }
  },
  actions: {


  }
}