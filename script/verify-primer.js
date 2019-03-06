const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')

// GGWP? take version from npm?
const url = name => `https://raw.githubusercontent.com/primer/css/master/src/${name}/package.json`
const styleDir = path.resolve(__dirname, '../public/styles/primer')
verifyPrimer()

async function verifyPrimer() {
  // Change to find-me-value module
  const findMeValue = (text, key) => {
    if (typeof text !== 'string' || typeof key !== 'string') {
      throw new TypeError('Expected a string');
    }

    const regex = new RegExp(`${key}.(.*)$`, 'm');
    const match = regex.exec(text);
    if  (match) {
      return match[1];
    } else {
      return null
    }
  }

  return fs.readdir(styleDir, (err, items) => {
    if (err) {
      throw new Error('Error when reading files', err)
    }

    for (var i=0; i<items.length; i++) {
      const file = styleDir + '/' + items[i]
      console.log(file)

      const openedFile = fs.readFileSync(file, 'utf8')

      const version = findMeValue(openedFile, "Module Version").replace(/\s/g, '')
      const name = findMeValue(openedFile, "Module Name").replace(/\s/g, '')
      console.log(name, version)
    }

   // fetch(url(name))
   //   .then(res => {
   //     console.log(res)
   //   })
  })
}
