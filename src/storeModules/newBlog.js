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
      error: 'You need a main image to post'
    },
    content: null,
    keywords: '',
    slug: null,
    valid: false,
    published: false,
    timeStamp: null,
    isEditing: false,
    docID: null
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
        state.timeStamp = now.getTime()
      }
    },
    updateContent: (state, payload) => {
      state.content = payload
    },
    togglePublished: state => state.published = !state.published,
    validateBlog: (state) => {
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
    resetNewBlog: (state, payload) => {
      Object.keys(state)
      .forEach(key => state[key] = payload[key])
    },
    setUpEditMode: (state, { doc, id }) => {
      for (let key in state) {
        state[key] !== null && state[key].hasOwnProperty('value') ?
          state[key].value = doc[key] :
          state[key] = doc[key]
      }
      state.docID = id
      state.isEditing = true
    }
  }
}