// @ts-check

const octicons = require('../patched-modules/octicons')

/**
 * Helper function, what accepts name, and other options and return the string
 * of the `<svg>` tag.
 *
 * @param {String} name The name of octicon. See https://octicons.github.com/ for search icons.
 * @param {String} className Add more CSS classes to the `<svg>` tag.
 * @param {String} width Size the SVG icon larger using `height`.
 * @param {String} height Size the SVG icon larger using `width`.
 * @param {String} ariaLabel Add accessibility `aria-label` to the icon.
 * @returns {Promise<any>} Returns a string of the `<svg>` tag.
 */
module.exports = async function getOcticons(name, className, width, height, ariaLabel) {
  // Strict Null Checking
  if (name === undefined || name === null) {
    return
  }

  const opts = {
    className: className ? className : null,
    width: width ? width : null,
    height: height ? height : null,
    ariaLabel: ariaLabel ? ariaLabel : null,
  }

  const svg = await octicons[name].toSVG({ "class": opts.className, "width": opts.width, "height": opts.height, "aria-label": opts.ariaLabel })
  return svg
}
