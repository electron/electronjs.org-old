const https = require('https')

const RENEW_EVERY = 43200000 // 12 hours
const BASIC_CACHE = {
  latest_version: null,
  timestamp: 0,
}

function getLatestFiddleVersion() {
  if (
    Date.now() - RENEW_EVERY < BASIC_CACHE.timestamp &&
    BASIC_CACHE.latest_version
  ) {
    return Promise.resolve(BASIC_CACHE.latest_version)
  }

  console.log(`Latest fiddle version in cache out of data, refetching`)

  return new Promise((resolve, reject) => {
    let data = ''

    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: '/repos/electron/fiddle/releases/latest',
      method: 'GET',
      headers: {
        'User-Agent': 'electronjs.org',
      },
    }

    const req = https.request(options, (res) => {
      const url = `https://${options.hostname}${options.path}`
      const status = `[${res.statusCode}]: ${res.statusMessage}`
      console.log(`Request to ${url}: ${status}`)

      if (res.statusCode >= 200 && res.statusCode < 400) {
        res.on('data', (d) => (data += d))

        res.on('end', () => {
          // Get the tag_name out of JSON, remove a possibly
          // leading "v", then resolve the promise with the
          // version number
          try {
            const parsedData = JSON.parse(data)

            if (parsedData.tag_name) {
              const tag = parsedData.tag_name.toString()

              if (tag.startsWith('v')) {
                BASIC_CACHE.latest_version = tag.slice(1)
              } else {
                BASIC_CACHE.latest_version = tag
              }

              BASIC_CACHE.timestamp = Date.now()

              resolve(BASIC_CACHE.latest_version)
            }
          } catch (error) {
            reject(error)
          }
        })
      }
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.end()
  })
}

module.exports = {
  getLatestFiddleVersion: getLatestFiddleVersion,
}
