var fs = require('fs')
var yaml = require('yamljs')

// Usage: node lib/roundup-helper.js <RoundupMonth> <PostMonth> <Year>
// Returns: Markdown table rows to be copy and pasted into blog post
// Example for August roundup: node lib/roundup-helper.js August September 2016
// Example post: http://electron.atom.io/blog/2016/09/06/august-2016-roundup
// Note: A current month comment must be added to _data/apps.yml before using 
var args = process.argv.slice(2)
if (!args[3]) args.push(new Date().getFullYear())

var yamlString = fs.readFileSync('_data/apps.yml').toString()
var roundupMonth = yamlString.split(`# ${args[0]} ${args[2]}`)[1].split(`# ${args[1]} ${args[2]}`)[0]
var apps = yaml.parse(roundupMonth)
var rows = ''

apps.forEach(function (app) {
  app.description = app.description.replace('.', '').replace('!', '')
  return rows += `| <img src='/images/apps/${app.icon}' width='50'> | [${app.name}](${app.website || app.repository}) | ${app.description} |\n`
})

console.log(rows)
