const child_process = require('child_process')

const packages = [
  'electron-api-historian',
  'electron-apps',
  'electron-releases',
  'electron-i18n',
]

const packagesString = packages.map((str) => `${str}@latest`).join(' ')
const command = `npm install ${packagesString} --save-exact`

console.time(`Running ${command}`)
child_process.execSync(command, {
  stdio: 'inherit',
})
console.timeEnd(`Running ${command}`)
