/**
 * Find Title by Value
 *
 * @param {string} value
 * @param {Object[]} options - options
 * @param {string} options[].title - option title
 * @param {string} options[].value - option value
 * @returns {string} title
 */
export const findByValue = (value, options) => {
  const found = options.find(option => option.value === value)

  return found ? found.title : false
}

/**
 *  Find Value by Title in options
 *
 * @param {string} title
 * @param {Object[]} options - options
 * @param {string} options[].title - option title
 * @param {string} options[].value - option value
 * @return {string} value
 */
export const findByTitle = (title, options) => {
  const found = options.find(option => option.title === title)

  return found ? found.value : false
}
