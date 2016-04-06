const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const $ = cheerio.load(fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'))

var apps = $('.app-icons > a').map(function () {
  return {
    name: $(this).attr('title'),
    description: '',
    website: $(this).attr('href'),
    repository: '',
    keywords: [],
    license: '',
    icon: path.basename($(this).find('img').attr('src'))
  }
}).get()


$('.open-source-apps a').map(function () {
  apps.push({
    name: $(this).text(),
    description: '',
    website: $(this).attr('href'),
    repository: '',
    keywords: ['open-source'],
    license: '',
    icon: ''
  })
})

process.stdout.write(JSON.stringify(apps, null, 2))
