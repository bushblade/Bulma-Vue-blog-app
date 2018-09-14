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
    mainText: {
      value: null,
      feedback: null,
      error: 'Enter some text for your blog post'
    },
    content: [],
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
    addField: ({ content }, payload) => {
      content.push(payload)
    },
    updateTextField: ({ content }, { value, index }) => {
      content[index].value = value
    },
    updateImagefield: ({ content }, { validated, index }) => {
      const toUpdate = content[index]
      toUpdate.value = validated.value
      toUpdate.feedback = validated.feedback
      toUpdate.preview = validated.preview
    },
    moveFieldUp: ({ content }, { index }) => {
      if (index !== 0) {
        let toMove = content[index]
        content.splice(index, 1)
        content.splice(index - 1, 0, toMove)
      }
    },
    moveFieldDown: ({ content }, { index }) => {
      if (index !== content.length - 1) {
        let toMove = content[index]
        content.splice(index, 1)
        content.splice(index + 1, 0, toMove)
      }
    },
    deleteField: ({ content }, { index }) => content.splice(index, 1),
    publishBlog: state => {
      let toValidate = Object.keys(state).filter((key, indx) => indx < 5)
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