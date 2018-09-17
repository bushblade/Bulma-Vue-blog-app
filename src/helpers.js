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
  const toPublish = {}
  for (let key in newBlog) {
    if (newBlog[key].value) {
      toPublish[key] = newBlog[key].value
    } else {
      toPublish[key] = newBlog[key]
    }
  }
  return toPublish
}