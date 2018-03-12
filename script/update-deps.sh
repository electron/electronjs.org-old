#!/usr/bin/env bash

# This script checks for then apply updates from a list of
# trusted dependencies.

set -x            # print commands before execution
set -o errexit    # always exit on error
set -o pipefail   # honor exit codes when piping
set -o nounset    # fail on unset variables

TRUSTED_DEPENDENCIES="electron-i18n electron-apps electron-api-historian electron-releases"

git clone "https://github.com/electron/electronjs.org" website
cd website
npm install
npm update $TRUSTED_DEPENDENCIES

if [ "$(git status --porcelain)" = "" ]; then
  echo "no new dependency to update"
  exit
fi

echo "updated some dependencies."
npm test

git config user.email electron@github.com
git config user.name electron-bot
git add package.json package-lock.json
git commit -am "chore: update dependencies"
git push origin master --follow-tags
