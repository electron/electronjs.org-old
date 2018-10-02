require('require-yaml')

const i18n = require('electron-i18n')
const flat = require('flat')
const { get, set } = require('lodash')
const locales = Object.keys(i18n.locales)
const websiteStrings = require('../data/locale.yml')
const websiteKeys = Object.keys(flat(websiteStrings))
const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi

// If any website strings are missing from electron-i18n,
// fill them in with the corresponding value from ../data/locale.yml
locales.forEach(locale => {
  websiteKeys.forEach(key => {
    const deepKey = `website.${locale}.${key}`
    // Always use local locale.yml data for English,
    // and backfill to English for missing entries in other languages.
    if (locale === 'en-US' || !get(i18n, deepKey)) {
      set(i18n, deepKey, get(websiteStrings, key))
    }
  })
})

function containsEmail (string) {
  return typeof string === 'string' && string.match(emailPattern)
}

function obfuscate (string) {
  return string.replace(emailPattern, match => {
    return Array.prototype.map.call(match, chr => {
      return `&#${chr.charCodeAt(0)};`
    }).join('')
  })
}

const keys = Object.keys(flat(i18n))

keys.forEach(key => {
  const value = get(i18n, key)
  if (containsEmail(value)) {
    set(i18n, key, obfuscate(value))
  }
})

module.exports = i18n
