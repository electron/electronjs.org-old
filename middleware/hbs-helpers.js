const hbs = require('express-hbs')
const getOcticons = require('./register-octicons')
const lobars = require('lobars')

class HandlebarsHelpers {
  /**
   * Handlebars helper that accepts options from the `{{octicon}}` tag,
   * parses with `getOcticons()` function and returns this to user.
   *
   * @param {string[]} data The data of hbs helper.
   * @param {void} cb Async callback.
   */
  async octicon (data, cb) {
    const { name, className, ariaLabel, width, height } = data.hash

    if (data.hash.class) {
      return console.error(`ERROR(Octicons Helper): Use 'className' instead of 'class'.`)
    }

    if (name === undefined) {
      return console.error('ERROR(Octicons Helper): Name is required field in octicon helper.')
    }

    const htmlSVG = await getOcticons(name, className, width, height, ariaLabel)
    return cb(new hbs.SafeString(htmlSVG))
  }
}

const hbsHelpers = new HandlebarsHelpers()

function registerHandlebarsTemplates() {
  hbs.registerHelper(lobars)
  hbs.registerAsyncHelper('octicon', hbsHelpers.octicon)
}

module.exports = {
  registerHandlebarsTemplates
}
