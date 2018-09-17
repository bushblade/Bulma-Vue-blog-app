export const newBlog = {
  state: {
    author: {
      value: null,
      feedback: null,
      error: 'You must enter a user name'
    },
    date: {
      time: null,
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
      error: 'You need a main image to post'
    },
    content: null,
    keywords: '',
    slug: null,
    valid: false
  },
  mutations: {
    update: (state, { property, value }) => {
      state[property].value = value.length > 0 ? value : null
      state[property].feedback = null
      if (property === 'title') {
        state.slug = value.replace(/[^a-z]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
      }
    },
    updateTitleImage: (state, { value, feedback }) => {
      state.titleImage.value = value
      state.titleImage.feedback = feedback
    },
    updateKeywords: (state, payload) => state.keywords = payload,
    defaultDate: state => {
      if (!state.date.value) {
        let now = new Date()
        state.date.value = now.toDateString()
        state.date.time = now.getTime()
      }
    },
    updateContent: (state, payload) => {
      state.content = payload
    },
    validateBlog: state => {
      let toValidate = Object.keys(state).filter((key, indx) => indx < 4)
      if (toValidate.every(key => state[key].value)) {
        state.valid = true
      } else {
        toValidate.forEach(key => {
          if (state[key].value === null) {
            state[key].feedback = state[key].error
          }
          state.valid = false
        })
      }
    },
    resetNewBlog: state => {
      for (let key in state){
        if (state[key].value) state[key].value = null
        else state[key] = null
      }
      state.keywords = ''
      state.date.time = null
    }
  },
  actions: {


  }
}