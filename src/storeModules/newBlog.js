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
      preview: 'https://via.placeholder.com/640x480',
      error: 'You need a main image to post'
    },
    mainText: {
      value: null,
      feedback: null,
      error: 'Enter some text for your blog post'
    },
    content: [],
    keywords: null,
    slug: null
  },
  mutations: {
    update: (state, { property, value }) => {
      state[property].value = value
    },
    updateKeywords: (state, payload) => state.keywords = payload,
    defaultDate: state => {
      if (!state.date.value){
        state.date.value = new Date().toDateString()
      }
    },
    setTitleImage: ({ titleImage }, { payload }) => {
      if (payload.size <= 5000000) {
        titleImage.value = payload
        titleImage.preview = window.URL.createObjectURL(payload)
        titleImage.feedback = null
      } else {
        titleImage.feedback = 'Images must be 500kb or less'
        titleImage.preview = 'https://via.placeholder.com/640x480'
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
          src: null,
          feedBack: null,
          id: Symbol()
        })
      }
    }
  },
  actions: {


  }
}