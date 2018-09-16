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
