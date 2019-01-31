#!/usr/bin/env node

const cp = require('child_process')
const fs = require('fs-extra')

generate()

async function generate () {
  console.log('Copy octicons to temporary directory…')
  await fs.copy('./node_modules/octicons/build/svg', './script/generate-octicons/_temp').catch(err => console.log(err))

  console.log('Clean octicons directory')
  await fs.remove('./styles/octicons')
  await fs.mkdirp('./styles/octicons')

  console.log('Generating octicons font stylesheet…')
  await cp.execSync("./node_modules/.bin/icon-font-generator ./script/generate-octicons/_temp/*.svg -o ./styles/octicons -n octicons -p octicon --csstp ./script/generate-octicons/template/style.hbs --height 1000 --center --codepoints ./script/generate-octicons/template/mapping.json --descent 180 --json false --types 'svg, ttf' --html false")

  console.log('Hide and Seek or Remove _temp folder…')
  await fs.remove('./script/generate-octicons/_temp')
    .then(() => {
      console.log('Fin')
    })
}
