export const validClasses = ({ feedback, value }) => {
  return {
    'is-danger': feedback,
    'is-success': !feedback && value
  }
}

export const capitalize = str => {
  return str[0].toUpperCase() + str.slice(1)
}

export const checkSetImage = file => {
  if (file.size <= 5000000) {
    return {
      value: file,
      feedback: null,
      preview: window.URL.createObjectURL(file)
    }
  } else {
    return {
      value: null,
      feedback: 'Images must be 500kb or less',
      preview: 'https://via.placeholder.com/640x480'
    }
  }
}

export const slugify = str => {
  return str.replace(/[^a-z]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
}

export const validateImage = src => {
  let image = new Image()
  image.src = src
  return image.width > 0
}

export const createBlogToPublish = newBlog => {
  const avoidKey = ['docID', 'isEditing', 'valid']
  return Object.keys(newBlog).filter(k => !avoidKey.includes(k))
    .reduce((obj, key) => {
      newBlog[key] !== null && newBlog[key].hasOwnProperty('value') ?
        obj[key] = newBlog[key].value :
        obj[key] = newBlog[key]
        return obj
    }, {})
}

export const defaultBlog = () => ({
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
})