// @ts-check

const octicons = require('../patched-modules/octicons')

// TODO: 📝
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
