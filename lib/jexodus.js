const hug = require('tree-hugger')
const path = require('path')
const flat = require('flat')
const {get} = require('lodash')
const Liquid = require('liquid-node')
const EventEmitter = require('events')
const requireYaml = require('require-yml')
const liquid = new Liquid.Engine

class Jexodus extends EventEmitter {
  constructor (basedir) {
    super()
    this.basedir = basedir
    this.config = requireYaml(path.join(this.basedir, '_config.yml'))
    this.targets = ['_data', '_includes', '_layouts', '_pages']
    this.targets.forEach(dir => {
      hug(this.pathTo(dir))
        .on('data', (data) => {
          this[dir] = data
          this.check()
        })
    })
    
    return this
  }

  check () {
    if (this.targets.every(dir => !!this[dir])) {
      this.buildRoutes()
      this.emit('ready')
    }
  }

  buildRoutes () {
    this.routes = {}
    const paths = Object.keys(flat(this._pages))
      .forEach(p => {
        if (!p.match(/\.content$/)) return
        p = p.replace(/\.content$/, '')

        let href = ('/' + p.split('.').join('/'))
          .replace(/\/index$/, '/')
          .replace(/\/readme$/i, '/')
          .replace(/(.+)\/$/, '$1')
        this.routes[href] = p
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
      output = layout.content.replace('{{ content }}', output)
    }

    // Inject includes
    Object.keys(this._includes).forEach(includeName => {
      const _include = this._includes[includeName]
      const pattern = new RegExp(`{% include ${includeName}.html %}`, 'mg')
      output = output.replace(pattern, _include.content)
    })

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
