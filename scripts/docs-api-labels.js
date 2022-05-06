/**
 * This script styles the raw <em> text inside our API docs,
 * turning them into labels that give additional information
 * on APIs (i.e. platform-specific, experimental, or deprecated)
 *
 * TODO: the non-platform labels need to be changed for i18n purposes.
 * A potential way to do this would be to add the strings to our website's
 * locales file (+ CrowdIn glossary), have them untranslated in the API
 * docs themselves, and splice in those locale strings in this script.
 */

const tags = {
  deprecated: 'Deprecated',
  experimental: 'Experimental',
  platforms: ['macOS', 'Linux', 'Windows'],
  readonly: 'Readonly',
}

function extractTagFromLink(tag) {
  if (tag.parentNode.nodeName === 'A') {
    const grandparent = tag.parentNode.parentNode
    grandparent.appendChild(tag)
  }
}

module.exports = function addTagLinks() {
  document.querySelectorAll('.docs em').forEach((em) => {
    if (em.textContent === tags.experimental) {
      em.classList.add('flag-label')
      extractTagFromLink(em)

      // link to `/docs/experimental.md`
      const link = document.createElement('a')
      link.innerHTML = em.outerHTML
      link.setAttribute('href', '../experimental')
      em.parentNode.appendChild(link)
      em.remove()
    } else if (em.textContent === tags.deprecated) {
      em.classList.add('flag-label')
      extractTagFromLink(em)
    } else if (em.textContent === tags.readonly) {
      em.classList.add('flag-label')
      extractTagFromLink(em)
    } else if (tags.platforms.includes(em.textContent)) {
      em.classList.add('platform-label')
      extractTagFromLink(em)
    }
  })
}
