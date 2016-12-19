// All ems with platform content should be styled as platform label
function fixPlatformLabels () {
  var ems = document.querySelectorAll('em')
  Array.prototype.forEach.call(ems, function (em) {
    if (em.textContent === 'macOS' || em.textContent === 'Linux' || em.textContent === 'Windows') {
      em.classList.add('platform-label')
    }
  })
}

// Override incorrect styling of string templates and colons in objects
function fixSyntaxHighlighting () {
  var sts = document.querySelectorAll('.err')
  Array.prototype.forEach.call(sts, function (st) {
    if (st.textContent === '`' || st.textContent === ':') {
      st.classList.remove('err')
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  fixPlatformLabels()
  fixSyntaxHighlighting()
})
