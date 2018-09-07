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
      preview: 'https://via.placeholder.com/1920x400',
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
    update: (state, payload) => {
      state[payload.target].value = payload.value
    },
    updateKeywords: (state, payload) => state.keywords = payload,
    defaultDate: state => {
      if (!state.date.value){
        state.date.value = new Date().toDateString()
      }
    },
    setTitleImage: (state, payload) => {
      if (payload.size <= 5000000) {
        state.titleImage.value = payload
        state.titleImage.preview = window.URL.createObjectURL(payload)
        state.titleImage.feedback = null
      } else {
        state.titleImage.feedback = 'Images must be 500kb or less'
        state.titleImage.preview = 'https://via.placeholder.com/1920x400'
      }
    }
  },
  actions: {


  }
}