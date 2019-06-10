// @ts-check

const octicons = require('@primer/octicons')

/**
 * Helper function that accepts options (e.g. name) and returns a string
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
    class: className ? className : null,
    width: width ? width : null,
    height: height ? height : null,
    'aria-label': ariaLabel ? ariaLabel : null,
  }

  if (opts.class === null) delete opts.class
  if (opts.width === null) delete opts.width
  if (opts.height === null) delete opts.height
  if (opts["aria-label"] === null) delete opts["aria-label"]

  const svg = await octicons[name].toSVG(opts)
  return svg
}
