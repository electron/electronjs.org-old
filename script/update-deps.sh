#!/usr/bin/env bash

set -x            # print commands before execution
set -o errexit    # always exit on error
set -o pipefail   # honor exit codes when piping
set -o nounset    # fail on unset variables

git clone "https://github.com/electron/electronjs.org" website
cd website
npm install
npm update electron-i18n electron-apps electron-api-historian electron-releases

if [ "$(git status --porcelain)" = "" ]; then
  echo "no new dependency to update"
  exit
else
  echo "updated some dependencies"
fi

# `pretest` script will run the build first
npm test

# git config user.email electron@github.com
# git config user.name electron-bot
# git add .
# git commit -am "chore: update electron module dependencies"
# git push origin master --follow-tags