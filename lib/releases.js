const semver = require('semver')

class Release {
  constructor(releaseData) {
    this.data = releaseData
    this.semver = semver.parse(this.data.version)
  }

  isStable() {
    return !this.isBeta() && !this.isAlpha() && !this.isNightly()
  }

  isBeta() {
    return this.semver.prerelease.includes('beta')
  }

  isAlpha() {
    return this.semver.prerelease.includes('alpha')
  }

  isNightly() {
    return this.semver.prerelease.includes('nightly')
  }

  hasNpmDistTag(tag) {
    if (this.data.npm_dist_tags) {
      return this.data.npm_dist_tags.includes(tag)
    } else {
      return false
    }
  }
}

class Releases {
  constructor(releases) {
    this.all = releases.map((r) => new Release(r))

    // electron-releases data is already sorted in version order,
    // highest version to lowest.
    this.stableRelease = this.all.find((r) => r.hasNpmDistTag('latest'))
    this.betaRelease = this.all.find((r) => r.hasNpmDistTag('beta'))
    this.alphaRelease = this.all.find((r) => r.hasNpmDistTag('alpha'))
    this.nightlyRelease = this.all.find((r) => r.hasNpmDistTag('nightly'))
  }

  ofType(type) {
    switch (type) {
      case 'stable':
        return this.all.filter((r) => r.isStable())
      case 'beta':
        return this.all.filter((r) => r.isBeta())
      case 'alpha':
        return this.all.filter((r) => r.isAlpha())
      case 'nightly':
        return this.all.filter((r) => r.isNightly())
      default:
        throw new Error(`Invalid release type: ${type}`)
    }
  }
}

module.exports = Releases
