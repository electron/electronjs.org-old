const hug = require('tree-hugger')
const path = require('path')
const flat = require('flat')
const {get} = require('lodash')
const Liquid = require('liquid-node')
const EventEmitter = require('events')
const requireYaml = require('require-yml')
const liquid = new Liquid.Engine()

class Jexodus extends EventEmitter {
  constructor (basedir) {
    // console.time('hugging the Jekyll tree')
    super()
    this.basedir = basedir
    this.config = requireYaml(path.join(this.basedir, '_config.yml'))
    this.targets = ['_data', '_includes', '_layouts', '_pages']
    this.targets.forEach(dir => {
      hug(this.pathTo(dir))
        .on('data', (data) => {
          this[dir] = data
          this.finish()
        })
    })

    return this
  }

  get middleware () {
    var self = this
    return function (req, res, next) {
      const page = self.routes[req.path]
      if (page) {
        return self.render(req.path).then(output => res.send(output))
      } else {
        return next()
      }
    }
  }

  finish () {
    if (this.targets.every(dir => !!this[dir])) {
      this.buildRoutes()
      // console.timeEnd('hugging the Jekyll tree')
      this.emit('ready')
    }
  }

  buildRoutes () {
    this.routes = {}
    Object.keys(flat(this._pages))
      .filter(key => key.match(/\.content$/)) // ignore paths that are not html or markdown files
      .map(key => key.replace(/\.content$/, ''))
      .forEach(key => {
        // use permalink found in frontmatter
        let permalink = get(this._pages, `${key}.data.permalink`)

        // derive permalink from path
        if (!permalink) {
          permalink = ('/' + key.split('.').join('/'))
            .replace(/\/index$/, '/') // /index becomes /
            .replace(/\/readme$/i, '/') // /readme also becomes /
        }

        // remove trailing slash
        permalink = permalink.replace(/(.+)\/$/, '$1')

        this.routes[permalink] = key
      })

    // console.log(this.routes)
  }

  render (href) {
    const key = this.routes[href]
    if (!key) return new Error(`href not found: ${href}`)

    let page = get(this._pages, key)
    let output = page.content

    // Wrap page in layout
    const layout = this._layouts[page.data.layout || 'default']
    if (layout) {
      output = layout.content.replace(/{{ ?content ?}}/, output)
    }

    // Inject includes
    Object.keys(this._includes).forEach(includeName => {
      const _include = this._includes[includeName]
      const pattern = new RegExp(`{% include ${includeName}.html %}`, 'mg')
      output = output.replace(pattern, _include.content)
    })

    // Beware of missing includes
    const includePattern = new RegExp(`{% include (.*).html %}`, 'mg')
    const missingIncludes = output.match(includePattern)
    if (missingIncludes) {
      console.error('Template is using non-existent includes!')
      console.error(missingIncludes)
      process.exit(1)
    }

    const context = {
      site: Object.assign(this.config, {data: this._data})
    }

    return liquid.parseAndRender(output, context)
  }

  pathTo (dir) {
    return path.join(this.basedir, dir)
  }
}

module.exports = function (path) {
  return new Jexodus(path)
}
