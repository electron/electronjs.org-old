// @ts-check

module.exports = function setupAnchorLinks () {
  /**
   * @param {string} id
   */
  function anchorForId (id) {
    const anchor = document.createElement('a')
    anchor.className = 'header-link'
    anchor.href = '#' + id
    anchor.innerHTML = "<span class='octicon octicon-link'></span>"
    anchor.title = 'Permalink'
    return anchor
  };

  /**
   * @param {string | number} level
   * @param {Element} containingElement
   */
  function linkifyAnchors (level, containingElement) {
    const headers = containingElement.getElementsByTagName('h' + level)
    for (let h = 0; h < headers.length; h++) {
      const header = headers[h]

      if (typeof header.id !== 'undefined' && header.id !== '') {
        header.appendChild(anchorForId(header.id))
      }
    }
  };

  const contentBlock = document.getElementsByClassName('docs')[0]
  if (!contentBlock) {
    return
  }

  for (let level = 1; level <= 6; level++) {
    linkifyAnchors(level, contentBlock)
  }
}
