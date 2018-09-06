import { stat } from "fs";

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
      preview: null,
      error: 'You need a main image to post'
    },
    mainText: {
      value: null,
      feedback: null,
      error: 'Enter some text for your blog post'
    },
    content: [],
    keywords: [],
    slug: null
  },
  mutations: {
    update: (state, payload) => {
      state[payload.target].value = payload.value
    },
    defaultDate: state => {
      if (!state.date.value){
        state.date.value = new Date().toDateString()
      }
    }
  },
  actions: {


  }
}