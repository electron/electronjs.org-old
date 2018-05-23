#!/usr/bin/env bash

# This script checks for then apply updates from a list of
# trusted dependencies.

set -x            # print commands before execution
set -o errexit    # always exit on error
set -o pipefail   # honor exit codes when piping
set -o nounset    # fail on unset variables

git clone "https://github.com/electron/electronjs.org" website
cd website
git config user.email electron@github.com
git config user.name electron-bot
npm i -g npm
npm ci

declare -a trusted_deps=("electron-i18n" "electron-apps" "electron-api-historian" "electron-releases")

for dep in "${trusted_deps[@]}"
do
  npm update $dep
  if [ "$(git status --porcelain)" != "" ]; then
    git add package.json package-lock.json
    git commit -am "chore: update $dep"
  fi
done

npm test
git push origin master --follow-tags