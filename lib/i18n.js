require('require-yaml')

const i18n = require('electron-i18n')
const flat = require('flat')
const {get, set} = require('lodash')
const locales = Object.keys(i18n.locales)
const websiteStrings = require('../data/locale.yml')
const websiteKeys = Object.keys(flat(websiteStrings))

// If any website strings are missing from electron-i18n,
// fill them in with the corresponding value from ../data/locale.yml
locales.forEach(locale => {
  websiteKeys.forEach(key => {
    const deepKey = `website.${locale}.${key}`
    if (!get(i18n, deepKey)) {
      set(i18n, deepKey, get(websiteStrings, key))
    }
  })
})

module.exports = i18n
