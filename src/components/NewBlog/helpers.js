export const validClasses = ({feedback, value}) => {
  return {
    'is-danger': feedback,
    'is-success': !feedback && value
  }
}