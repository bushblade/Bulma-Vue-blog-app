export const validClasses = ({ feedback, value }) => {
  return {
    'is-danger': feedback,
    'is-success': !feedback && value
  }
}

export const capitalize = str => {
  return str[0].toUpperCase() + str.slice(1)
}