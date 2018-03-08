const argv = require('minimist')(process.argv.slice(2))
const cheerio = require('cheerio')
const app = require('../server.js')
const port = Number(process.env.PORT) || argv.p || argv.port || 5000
const host = process.env.HOST || `http://localhost:${port}`

const crawler = require('simplecrawler')(host)
crawler.parseScriptTags = false

crawler.addFetchCondition((queueItem, referrerQueueItem, cb) => {
  cb(null, !queueItem.path.match(/\/images|styles\/|docs\/all/gi))
})

crawler.discoverResources = (buffer, queueItem) => {
  const $ = cheerio.load(buffer.toString('utf8'))
  return $('a[href]').get().map((elem) => $(elem).attr('href'))
}

crawler.on('fetch404', (queueItem, response) => {
  console.warn(`ERROR(404) fetching ${queueItem.path} (referrer: ${queueItem.referrer.replace(host, '')})`)
})

crawler.on('complete', () => {
  console.log('fin')
  server.close()
})

const server = app.listen(port, () => {
  console.log(`app running on ${port}`)
  crawler.start()
})
