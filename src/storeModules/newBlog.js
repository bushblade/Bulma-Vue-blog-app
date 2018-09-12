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
    setTitleImage: ({ titleImage }, { file }) => {
      if (file.size <= 5000000) {
        titleImage.value = file
        titleImage.feedback = null
        titleImage.preview = window.URL.createObjectURL(file)
      } else {
        titleImage.value = null
        titleImage.feedback = 'Images must be 500kb or less'
        titleImage.preview = 'https://via.placeholder.com/640x300'
      }
    },
    addField: ({ content }, payload) => {
      if (payload === 'p') {
        content.push({
          type: 'text',
          value: null,
          id: Symbol()
        })
      } else {
        content.push({
          type: 'image',
          value: null,
          feedBack: null,
          preview: 'https://via.placeholder.com/640x300',
          id: Symbol()
        })
      }
    },
    updateTextField: ({ content }, { value, index }) => {
      content[index].value = value
    },
    updateImagefield: ({ content }, { file, index }) => {
      const toUpdate = content[index]
      if (file.size <= 5000000) {
        toUpdate.value = file
        toUpdate.feedback = null
        toUpdate.preview = window.URL.createObjectURL(file)
      } else {
        toUpdate.value = null
        toUpdate.feedback = 'Images must be 500kb or less'
        toUpdate.preview = 'https://via.placeholder.com/640x480'
      }
    },
    moveFieldUp: ({ content }, { index }) => {
      if (index !== 0) {
        let toMove = content[index]
        content.splice(index, 1)
        content.splice(index - 1, 0, toMove)
      }
    },
    moveFieldDown: ({ content }, { index }) => {
      if (index !== content.lenght - 1) {
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