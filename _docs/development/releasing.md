---
version: v1.6.10
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

## Compile release notes

The current process is to maintain a local file, keeping track of notable changes as pull requests are merged. For examples of how to format the notes, see previous releases on [the releases page](https://github.com/electron/electron/releases).

## Create a temporary branch

Create a new branch from `master` named `release`.

```sh
git checkout master
git pull
git checkout -b release
```

This branch is created as a precaution to prevent any merged PRs from sneaking into a release between the time the temporary release branch is created and the CI builds are complete.

## Bump the version

Run the `bump-version` script, passing `major`, `minor`, or `patch` as an argument:

```sh
npm run bump-version -- patch
git push origin HEAD
```

This will bump the version number in several files. See [this bump commit](https://github.com/electron/electron/commit/78ec1b8f89b3886b856377a1756a51617bc33f5a) for an example.

Most releases will be `patch` level. Upgrades to Chrome or other major changes should use `minor`. For more info, see [electron-versioning]({{site.baseurl}}/docs/tutorial/electron-versioning).

## Edit the release draft

1.  Visit [the releases page](https://github.com/electron/electron/releases) and you'll see a new draft release with placeholder release notes.
2.  Edit the release and add release notes.
3.  Click 'Save draft'. **Do not click 'Publish release'!**
4.  Wait for all the builds to pass. :hourglass_flowing_sand:

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
