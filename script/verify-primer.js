const fs = require('fs')
const fetch = require('node-fetch')

verifyPrimer()

// TODO: Replace by find-me-value module
function findMeValue (text, key) {
  if (typeof text !== 'string' || typeof key !== 'string') {
    throw new TypeError('Expected a string');
  }

  const regex = new RegExp(`${key}.(.*)$`, 'm');
  const match = regex.exec(text);
  if (match) {
    return match[1];
  } else {
    return null
  }
}

async function verifyPrimer() {
  const url = `https://cdn.jsdelivr.net/gh/primer/primer@master/package.json`
  const localVersion = fs.readFileSync('./public/styles/primer/.version', 'utf8').slice(0, 6) // ugh hacks

  fetch(url)
  .then(res => res.text())
  .then(body => {
    // hacks 🤖
    typeof body === 'string'
    const masterVersion = findMeValue(body, '"version":').replace(/\",/, '').replace(/\"/, '') // simplfiy

    if (masterVersion !== localVersion) {
      console.log(`WARNING: Local version of Primer behind version on npm:\n - Local Version: ${localVersion}\n - Version on npm: ${masterVersion}`)
    } else if (masterVersion === localVersion) {
      console.log('All fine')
    }
  })
}
