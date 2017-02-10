// Load dev env from .env file (for Slack testing)
require('dotenv').load()

require('shelljs/global')
config.fatal = true // fail fast
config.verbose = true // print commands to stdout

const assert = require('assert')
assert(process.env.npm_package_name, 'deploy script must be run using `npm run deploy`')
assert(process.env.npm_package_author_name, 'author name must set in package.json')
assert(process.env.npm_package_author_email, 'author email must set in package.json')
assert(process.env.SLACK_WEBHOOK, 'SLACK_WEBHOOK must be set')

const pkg = require('../package.json')
const repo = require('github-url-to-object')(pkg.repository)
const checkoutDir = require('tmp').dirSync().name
const slack = require('slack-notify')(process.env.SLACK_WEBHOOK)
const committedChanges = []

assert(repo && repo.https_url, 'repository must be set in package.json')

// Invoke commands from the cloned repo directory
function run (cmd) {
  return exec(cmd, {cwd: checkoutDir})
}

// Wrap the Slack notifier for convenience
function notify (message, callback) {
  const opts = {
    icon_url: 'https://avatars0.githubusercontent.com/u/18403005?v=3',
    username: process.env.npm_package_name,
    text: message
  }
  callback ? slack.send(opts, callback) : slack.send(opts)
}

// Send a slack notification if anything unexpected goes wrong
process.on('uncaughtException', notify)

run(`git clone ${repo.https_url} .`)
run(`git config user.name ${process.env.npm_package_author_name}`)
run(`git config user.email ${process.env.npm_package_author_email}`)
run(`npm config set loglevel error`)
run(`npm install`)

// Run each build script, committing any resulting git chances atomically
Object.keys(pkg.scripts)
  .filter(key => key.startsWith('build-'))
  .map(key => key.replace('build-', ''))
  .forEach(task => {
    run(`npm run build-${task}`)

    // bail if git is clean
    if (run(`git status --porcelain`).stdout === '') return

    committedChanges.push(task)
    run(`git add . && git commit -avm "update ${task}"`)
  })

// If changes were committed, then run tests and push
if (committedChanges.length) {
  const testResults = run('npm test')
  if (testResults.code === 0) {
    run('git push origin gh-pages')
    notify(`Deployed ${committedChanges.join(', ')}`)
  } else {
    notify(`Test suite failed!\n\n${testResults.stderr}`)
  }
} else {
  console.log('No changes to deploy; Exiting.')
  // notify(`No changes to deploy.`, function (err) {
  //   if (err) throw err
  //   process.exit()
  // })
}
