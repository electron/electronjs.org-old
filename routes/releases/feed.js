const {chain, get, set} = require('lodash')
const cleanDeep = require('clean-deep')

module.exports = (req, res) => {
  let releases = req.context.releases

  if (req.query.pick) {
    const props = chain(req.query.pick)
      .split(',')
      .map(prop => prop.trim())
      .compact()
      .value()

    const liteReleases = releases.map(release => {
      const lite = {}
      props.forEach(prop => {
        if (get(release, prop) !== null) {
          set(lite, prop, get(release, prop))
        }
      })
      return cleanDeep(lite)
    })

    return res.json(liteReleases)
  }

  res.json(releases)
}
