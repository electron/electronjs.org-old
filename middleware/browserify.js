const browserify = require('browserify-middleware')

const nodeModulesToAvoidBabelifying = [
  'lodash',
  'lunr',
  'prettydate'
]

const excludeRegex = new RegExp(`/node_modules/(${nodeModulesToAvoidBabelifying.join('|')})`)

function babelifyMiddleware (entry) {
  return browserify(entry, {
    transform: [
      ['babelify', {
        global: true,
        exclude: excludeRegex,
        presets: [
          ['@babel/preset-env', { targets: '> 0.25%, not dead' }]
        ]
      }],
      'brfs'
    ]
  })
}

module.exports = babelifyMiddleware
