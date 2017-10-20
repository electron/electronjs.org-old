// All <em> tags with platform content should be styled as platform label

const labels = ['macOS', 'Linux', 'Windows']

module.exports = function fixPlatformLabels () {
  document.querySelectorAll('em').forEach(em => {
    if (labels.includes(em.textContent)) {
      em.classList.add('platform-label')
    }
  })
}
