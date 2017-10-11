---
version: v1.7.9
permalink: /docs/development/clang-format/
category: Development
redirect_from:
  - /docs/v0.37.8/development/clang-format/
  - /docs/v0.37.7/development/clang-format/
  - /docs/v0.37.6/development/clang-format/
  - /docs/v0.37.5/development/clang-format/
  - /docs/v0.37.4/development/clang-format/
  - /docs/v0.37.3/development/clang-format/
  - /docs/v0.37.1/development/clang-format/
  - /docs/v0.37.0/development/clang-format/
  - /docs/v0.36.12/development/clang-format/
  - /docs/v0.36.11/development/clang-format/
  - /docs/v0.36.10/development/clang-format/
  - /docs/v0.36.9/development/clang-format/
  - /docs/v0.36.8/development/clang-format/
  - /docs/v0.36.7/development/clang-format/
  - /docs/v0.36.6/development/clang-format/
  - /docs/v0.36.5/development/clang-format/
  - /docs/v0.36.4/development/clang-format/
  - /docs/v0.36.3/development/clang-format/
  - /docs/v0.36.2/development/clang-format/
  - /docs/v0.36.0/development/clang-format/
  - /docs/v0.35.5/development/clang-format/
  - /docs/v0.35.4/development/clang-format/
  - /docs/v0.35.3/development/clang-format/
  - /docs/v0.35.2/development/clang-format/
  - /docs/v0.35.1/development/clang-format/
  - /docs/v0.34.4/development/clang-format/
  - /docs/v0.34.3/development/clang-format/
  - /docs/v0.34.2/development/clang-format/
  - /docs/v0.34.1/development/clang-format/
  - /docs/v0.34.0/development/clang-format/
  - /docs/v0.33.9/development/clang-format/
  - /docs/v0.33.8/development/clang-format/
  - /docs/v0.33.7/development/clang-format/
  - /docs/v0.33.6/development/clang-format/
  - /docs/v0.33.4/development/clang-format/
  - /docs/v0.33.3/development/clang-format/
  - /docs/v0.33.2/development/clang-format/
  - /docs/v0.33.1/development/clang-format/
  - /docs/v0.33.0/development/clang-format/
  - /docs/v0.32.3/development/clang-format/
  - /docs/v0.32.2/development/clang-format/
  - /docs/v0.31.2/development/clang-format/
  - /docs/v0.31.0/development/clang-format/
  - /docs/v0.30.4/development/clang-format/
  - /docs/v0.29.2/development/clang-format/
  - /docs/v0.29.1/development/clang-format/
  - /docs/v0.28.3/development/clang-format/
  - /docs/v0.28.2/development/clang-format/
  - /docs/v0.28.1/development/clang-format/
  - /docs/v0.28.0/development/clang-format/
  - /docs/v0.27.3/development/clang-format/
  - /docs/v0.27.2/development/clang-format/
  - /docs/v0.27.1/development/clang-format/
  - /docs/v0.27.0/development/clang-format/
  - /docs/v0.26.1/development/clang-format/
  - /docs/v0.26.0/development/clang-format/
  - /docs/v0.25.3/development/clang-format/
  - /docs/v0.25.2/development/clang-format/
  - /docs/v0.25.1/development/clang-format/
  - /docs/v0.25.0/development/clang-format/
  - /docs/v0.24.0/development/clang-format/
  - /docs/v0.23.0/development/clang-format/
  - /docs/v0.22.3/development/clang-format/
  - /docs/v0.22.2/development/clang-format/
  - /docs/v0.22.1/development/clang-format/
  - /docs/v0.21.3/development/clang-format/
  - /docs/v0.21.2/development/clang-format/
  - /docs/v0.21.1/development/clang-format/
  - /docs/v0.21.0/development/clang-format/
  - /docs/v0.20.8/development/clang-format/
  - /docs/v0.20.7/development/clang-format/
  - /docs/v0.20.6/development/clang-format/
  - /docs/v0.20.5/development/clang-format/
  - /docs/v0.20.4/development/clang-format/
  - /docs/v0.20.3/development/clang-format/
  - /docs/v0.20.2/development/clang-format/
  - /docs/v0.20.1/development/clang-format/
  - /docs/v0.20.0/development/clang-format/
  - /docs/latest/development/clang-format/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/development/clang-format.md
title: Using clang-format on C++ Code
excerpt: ''
sort_title: clang-format
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

    https://github.com/electron/electron/blob/master/docs/development/clang-format.md

    Thanks!

-->
# Using clang-format on C++ Code

[`clang-format`](http://clang.llvm.org/docs/ClangFormat.html) is a tool to automatically format C/C++/Objective-C code, so that developers don't need to worry about style issues during code reviews.

It is highly recommended to format your changed C++ code before opening pull requests, which will save you and the reviewers' time.

You can install `clang-format` and `git-clang-format` via `npm install -g clang-format`.

To automatically format a file according to Electron C++ code style, simply run `clang-format -i path/to/electron/file.cc`. It should work on macOS/Linux/Windows.

The workflow to format your changed code:

1.  Make codes changes in Electron repository.
2.  Run `git add your_changed_file.cc`.
3.  Run `git-clang-format`, and you will probably see modifications in `your_changed_file.cc`, these modifications are generated from `clang-format`.
4.  Run `git add your_changed_file.cc`, and commit your change.
5.  Now the branch is ready to be opened as a pull request.

If you want to format the changed code on your latest git commit (HEAD), you can run `git-clang-format HEAD~1`. See `git-clang-format -h` for more details.

## Editor Integration

You can also integrate `clang-format` directly into your favorite editors. For further guidance on setting up editor integration, see these pages:

*   [Atom](https://atom.io/packages/clang-format)
*   [Vim & Emacs](http://clang.llvm.org/docs/ClangFormat.html#vim-integration)
*   [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=xaver.clang-format)
