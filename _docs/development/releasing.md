---
version: v1.7.9
permalink: /docs/development/releasing/
category: Development
redirect_from:
  - /docs/v0.37.8/development/releasing/
  - /docs/v0.37.7/development/releasing/
  - /docs/v0.37.6/development/releasing/
  - /docs/v0.37.5/development/releasing/
  - /docs/v0.37.4/development/releasing/
  - /docs/v0.37.3/development/releasing/
  - /docs/v0.37.1/development/releasing/
  - /docs/v0.37.0/development/releasing/
  - /docs/v0.36.12/development/releasing/
  - /docs/v0.36.11/development/releasing/
  - /docs/v0.36.10/development/releasing/
  - /docs/v0.36.9/development/releasing/
  - /docs/v0.36.8/development/releasing/
  - /docs/v0.36.7/development/releasing/
  - /docs/v0.36.6/development/releasing/
  - /docs/v0.36.5/development/releasing/
  - /docs/v0.36.4/development/releasing/
  - /docs/v0.36.3/development/releasing/
  - /docs/v0.36.2/development/releasing/
  - /docs/v0.36.0/development/releasing/
  - /docs/v0.35.5/development/releasing/
  - /docs/v0.35.4/development/releasing/
  - /docs/v0.35.3/development/releasing/
  - /docs/v0.35.2/development/releasing/
  - /docs/v0.35.1/development/releasing/
  - /docs/v0.34.4/development/releasing/
  - /docs/v0.34.3/development/releasing/
  - /docs/v0.34.2/development/releasing/
  - /docs/v0.34.1/development/releasing/
  - /docs/v0.34.0/development/releasing/
  - /docs/v0.33.9/development/releasing/
  - /docs/v0.33.8/development/releasing/
  - /docs/v0.33.7/development/releasing/
  - /docs/v0.33.6/development/releasing/
  - /docs/v0.33.4/development/releasing/
  - /docs/v0.33.3/development/releasing/
  - /docs/v0.33.2/development/releasing/
  - /docs/v0.33.1/development/releasing/
  - /docs/v0.33.0/development/releasing/
  - /docs/v0.32.3/development/releasing/
  - /docs/v0.32.2/development/releasing/
  - /docs/v0.31.2/development/releasing/
  - /docs/v0.31.0/development/releasing/
  - /docs/v0.30.4/development/releasing/
  - /docs/v0.29.2/development/releasing/
  - /docs/v0.29.1/development/releasing/
  - /docs/v0.28.3/development/releasing/
  - /docs/v0.28.2/development/releasing/
  - /docs/v0.28.1/development/releasing/
  - /docs/v0.28.0/development/releasing/
  - /docs/v0.27.3/development/releasing/
  - /docs/v0.27.2/development/releasing/
  - /docs/v0.27.1/development/releasing/
  - /docs/v0.27.0/development/releasing/
  - /docs/v0.26.1/development/releasing/
  - /docs/v0.26.0/development/releasing/
  - /docs/v0.25.3/development/releasing/
  - /docs/v0.25.2/development/releasing/
  - /docs/v0.25.1/development/releasing/
  - /docs/v0.25.0/development/releasing/
  - /docs/v0.24.0/development/releasing/
  - /docs/v0.23.0/development/releasing/
  - /docs/v0.22.3/development/releasing/
  - /docs/v0.22.2/development/releasing/
  - /docs/v0.22.1/development/releasing/
  - /docs/v0.21.3/development/releasing/
  - /docs/v0.21.2/development/releasing/
  - /docs/v0.21.1/development/releasing/
  - /docs/v0.21.0/development/releasing/
  - /docs/v0.20.8/development/releasing/
  - /docs/v0.20.7/development/releasing/
  - /docs/v0.20.6/development/releasing/
  - /docs/v0.20.5/development/releasing/
  - /docs/v0.20.4/development/releasing/
  - /docs/v0.20.3/development/releasing/
  - /docs/v0.20.2/development/releasing/
  - /docs/v0.20.1/development/releasing/
  - /docs/v0.20.0/development/releasing/
  - /docs/latest/development/releasing/
source_url: 'https://github.com/electron/electron/blob/master/docs/development/releasing.md'
title: Releasing
excerpt: ''
sort_title: releasing
---



<!--


                                      ::::
                                    :o+//+o:
                                    +o    oo-
                                    :o+//oo/+o/
                                      -::-   -oo:
                                               /s/
                      -::::::::-                :s/  :::--
                  :+oo+////////+:        -:/+oo/ :s:-///++oo+:
                /o+:                -/+oo+/:-     +o-      -:+o:
               /s:              -:+o+/:           -o+         :s/
              -s/            -/oo/:                /s-         +s-
              -s/         -/oo/-                   -s/         /s-
               oo       :+o/-                       oo         oo
               -s/    :oo/                          /s-       /s-
                :s/ :oo:              -::-          /s-      /s:
                  -+o/               /ssss/         :s:    -+o-
                 :o+--               /ssss/         :s:   :o+-
                :s/  +o:              -::-          /s-   --
               -s/    :+o/-                         /s-
               oo       -+o+-                       oo
              -s/         -/oo/-                   -s/
             -+soo+:         -/oo/:                /s-      /oooo+-
             o+   :s:           -:+o+/:-          -o+      /s:  -oo
             oo:--/s:       ::      -:+oo+/:-     -/-      /s/--:o+
              :+++/-        :s:          -:/+ooo++//////++oo//+o+:
                             /s:                --::::::--
                              /s/              /s-
                               :oo:          :oo:
                                 /oo/-    -/oo/
                                   -/+oooo+/-





                   _______  _______  _______  _______  __
                  |       ||       ||       ||       ||  |
                  |  _____||_     _||   _   ||    _  ||  |
                  | |_____   |   |  |  | |  ||   |_| ||  |
                  |_____  |  |   |  |  |_|  ||    ___||__|
                   _____| |  |   |  |       ||   |     __
                  |_______|  |___|  |_______||___|    |__|


    This file is generated automatically, so it should not be edited.

    To make changes, head over to the electron/electron repository:

    https://github.com/electron/electron/blob/master/docs/development/releasing.md

    Thanks!

-->
# Releasing

This document describes the process for releasing a new version of Electron.

## Create a temporary branch

Create a new branch from `master`. Name it `release` or anything you like.

Note: If you are creating a backport release, you'll check out `1-6-x`, `1-7-x`, etc instead of `master`.

```sh
git checkout master
git pull
git checkout -b release
```

This branch is created as a precaution to prevent any merged PRs from sneaking into a release between the time the temporary release branch is created and the CI builds are complete.

## Check for extant drafts

The upload script [looks for an existing draft release](https://github.com/electron/electron/blob/7961a97d7ddbed657c6c867cc8426e02c236c077/script/upload.py#L173-L181). To prevent your new release from clobbering an existing draft, check [the releases page](https://github.com/electron/electron/releases) and make sure there are no drafts.

## Bump the version

Run the `bump-version` script, passing `major`, `minor`, or `patch` as an argument:

```sh
npm run bump-version -- patch
git push origin HEAD
```

This will bump the version number in several files. See [this bump commit](https://github.com/electron/electron/commit/78ec1b8f89b3886b856377a1756a51617bc33f5a) for an example.

Most releases will be `patch` level. Upgrades to Chrome or other major changes should use `minor`. For more info, see [electron-versioning]({{site.baseurl}}/docs/tutorial/electron-versioning).

## Wait for builds :hourglass_flowing_sand:

The presence of the word [`Bump`](https://github.com/electron/electron/blob/7961a97d7ddbed657c6c867cc8426e02c236c077/script/cibuild-linux#L3-L6) in the commit message created by the `bump-version` script will [trigger the release process](https://github.com/electron/electron/blob/7961a97d7ddbed657c6c867cc8426e02c236c077/script/cibuild#L82-L96).

To monitor the build progress, see the following pages:

*   [208.52.191.140:8080/view/All/builds](http://208.52.191.140:8080/view/All/builds) for Mac and Windows
*   [jenkins.githubapp.com/label/chromium/](https://jenkins.githubapp.com/label/chromium/) for Linux

## Compile release notes

Writing release notes is a good way to keep yourself busy while the builds are running. For prior art, see existing releases on [the releases page](https://github.com/electron/electron/releases).

Tips:

*   Each listed item should reference a PR on electron/electron, not an issue, nor a PR from another repo like libcc.
*   No need to use link markup when referencing PRs. Strings like `#123` will automatically be converted to links on github.com.
*   To see the version of Chromium, V8, and Node in every version of Electron, visit [atom.io/download/electron/index.json](https://atom.io/download/electron/index.json).

### Patch releases

For a `patch` release, use the following format:

```
## Bug Fixes

* Fixed a cross-platform thing. #123

### Linux

* Fixed a Linux thing. #123

### macOS

* Fixed a macOS thing. #123

### Windows

* Fixed a Windows thing. #1234

## API Changes

* Changed a thing. #123

### Linux

* Changed a Linux thing. #123

### macOS

* Changed a macOS thing. #123

### Windows

* Changed a Windows thing. #123

```

### Minor releases

For a `minor` release (which is normally a Chromium update, and possibly also a Node update), e.g. `1.8.0`, use this format:

```
**Note:** This is a beta release. This is the first release running on upgraded versions of Chrome/Node.js/V8 and most likely will have have some instability and/or regressions.

Please file new issues for any bugs you find in it.

This release is published to [npm](https://www.npmjs.com/package/electron) under the `beta` tag and can be installed via `npm install electron@beta`.

## Upgrades

- Upgraded from Chrome `oldVersion` to `newVersion`. #123
- Upgraded from Node `oldVersion` to `newVersion`. #123
- Upgraded from v8 `oldVersion` to `newVersion`. #9116

## Other Changes

- Some other change. #123

```

## Edit the release draft

1.  Visit [the releases page](https://github.com/electron/electron/releases) and you'll see a new draft release with placeholder release notes.
2.  Edit the release and add release notes.
3.  Ensure the `prerelease` checkbox is checked. This should happen automatically for Electron versions >=1.7
4.  Click 'Save draft'. **Do not click 'Publish release'!**
5.  Wait for all builds to pass before proceeding.

## Merge temporary branch

Merge the temporary back into master, without creating a merge commit:

```sh
git merge release master --no-commit
git push origin master
```

If this fails, rebase with master and rebuild:

```sh
git pull
git checkout release
git rebase master
git push origin HEAD
```

## Run local debug build

Run local debug build to verify that you are actually building the version you want. Sometimes you thought you were doing a release for a new version, but you're actually not.

```sh
npm run build
npm start
```

Verify the window is displaying the current updated version.

## Set environment variables

You'll need to set the following environment variables to publish a release. Ask another team member for these credentials.

*   `ELECTRON_S3_BUCKET`
*   `ELECTRON_S3_ACCESS_KEY`
*   `ELECTRON_S3_SECRET_KEY`
*   `ELECTRON_GITHUB_TOKEN` - A personal access token with "repo" scope.

You will only need to do this once.

## Publish the release

This script will download the binaries and generate the node headers and the .lib linker used on Windows by node-gyp to build native modules.

```sh
npm run release
```

Note: Many distributions of Python still ship with old HTTPS certificates. You may see a `InsecureRequestWarning`, but it can be disregarded.

## Delete the temporary branch

```sh
git checkout master
git branch -D release # delete local branch
git push origin :release # delete remote branch
```

## Promoting a release on npm

New releases are published to npm with the `beta` tag. Every release should eventually get promoted to stable unless there's a good reason not to.

Releases are normally given around two weeks in the wild before being promoted. Before promoting a release, check to see if there are any bug reports against that version, e.g. issues labeled with `version/1.7.x`.

It's also good to ask users in Slack if they're using the beta versions successfully.

To see what's beta and stable at any given time:

```
$ npm dist-tag ls electron  
beta: 1.7.5
latest: 1.6.11

```

To promote a beta version to stable (aka `latest`):

```
npm dist-tag add electron@1.2.3 latest

```
