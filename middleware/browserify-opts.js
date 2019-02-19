const nodeModulesToAvoidBabelifying = [
  'lodash',
  'lunr',
  'prettydate'
]

const excludeRegex = new RegExp(`/node_modules/(${nodeModulesToAvoidBabelifying.join('|')})`)

module.exports = function doBrowserify (browserify) {
  return function (entry) {
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
}
