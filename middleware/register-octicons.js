// @ts-check

const octicons = require('octicons')

// TODO: 📝
module.exports = async function getOcticons(name) {
  // Strict Null Checking
  if (name === undefined || name === null) {
    return
  }

  const svg = await octicons[name].toSVG()
  return svg
}
