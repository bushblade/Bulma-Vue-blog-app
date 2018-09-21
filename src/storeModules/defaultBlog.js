export const defaultBlog = {
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
  }
}