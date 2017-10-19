const patterns = {
  win32: [
    /\.exe$/i
  ],
  darwin: [
    /OSX.*\.zip$/i,
    /darwin.*\.zip$/i,
    /macOS.*\.zip$/i,
    /mac.*\.zip$/i,
    /\.dmg$/i],
  linux: [
    /\.rpm$/i,
    /\.deb$/i,
    /\.AppImage$/i
  ]
}

function detectAssetPlatform (filename) {
  for (const platform in patterns) {
    if (patterns[platform].some(pattern => pattern.test(filename))) return platform
  }
  return null
}

detectAssetPlatform.patterns = patterns

module.exports = detectAssetPlatform
