// @ts-check

/**
 * @param {string} category
 * @param {string} action
 */
const sendScience = (category, action) => {
  const body = {
    category: category,
    action: action,
  }

  fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(body)
  })
}

const handleScience = () => {
  const elements = document.querySelectorAll('[data-sc-name]')
  elements.forEach((el) => {
    el.addEventListener('click', () => {
      const name = el.getAttribute('data-sc-name')
      let category = el.getAttribute('data-sc-category')
      if (!category) category = 'general'

      sendScience(category, name)
    })
  })
}

module.exports = handleScience
