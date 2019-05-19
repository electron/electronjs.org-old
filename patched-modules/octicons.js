// NOTE: Patched version of octicons.
// Changes:       Added else check what returns default values if
//                provided value undefined, null or something else,
//                what can not be in options.
// Upstream Bugs: If provided empty values into class options
//                like string (eta '' or ``) this shows empty
//                class without additional context.
//                Return `class=""`, should be 'class="octicon octicon-alert"'

const data = require('octicons/build/data.json')
const objectAssign = require('object-assign')

for (const key of Object.keys(data)) {
  // Returns a string representation of html attributes
  const htmlAttributes = (icon, options) => {
    const attributes = []
    const attrObj = objectAssign({}, data[key].options, options)

    // If the user passed in options
    if (options) {
      // If any of the width or height is passed in
      if (options['width'] || options['height']) {
        attrObj['width'] = options['width']
          ? options['width']
          : (parseInt(options['height']) * data[key].options['width']) / data[key].options['height']
        attrObj['height'] = options['height']
          ? options['height']
          : (parseInt(options['width']) * data[key].options['height']) / data[key].options['width']
      } else {
        attrObj['height'] = data[key].width
        attrObj['width'] = data[key].height
      }

      // If the user passed in class
      if (options['class']) {
        attrObj['class'] = `octicon octicon-${key} ${options['class']}`
        attrObj['class'].trim()
      } else {
        attrObj['class'] = `octicon octicon-${key}`
      }

      // If the user passed in aria-label
      if (options['aria-label']) {
        attrObj['aria-label'] = options['aria-label']
        attrObj['role'] = 'img'

        // Un-hide the icon
        delete attrObj['aria-hidden']
      } else {
        delete attrObj['aria-label']
      }
    }

    for (const option of Object.keys(attrObj)) {
      attributes.push(`${option}="${attrObj[option]}"`)
    }

    return attributes.join(' ').trim()
  }

  // Set the symbol for easy access
  data[key].symbol = key

  // Set all the default options
  data[key].options = {
    version: '1.1',
    width: data[key].width,
    height: data[key].height,
    viewBox: `0 0 ${data[key].width} ${data[key].height}`,
    class: `octicon octicon-${key}`,
    'aria-hidden': 'true'
  }

  // Function to return an SVG object
  data[key].toSVG = function(options) {
    return `<svg ${htmlAttributes(data[key], options)}>${data[key].path}</svg>`
  }
}

// Import data into exports
module.exports = data
