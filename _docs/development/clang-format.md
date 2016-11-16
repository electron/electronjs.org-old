---
version: v1.4.7
category: Development
redirect_from:
    - /docs/v0.24.0/development/clang-format/
    - /docs/v0.25.0/development/clang-format/
    - /docs/v0.26.0/development/clang-format/
    - /docs/v0.27.0/development/clang-format/
    - /docs/v0.28.0/development/clang-format/
    - /docs/v0.29.0/development/clang-format/
    - /docs/v0.30.0/development/clang-format/
    - /docs/v0.31.0/development/clang-format/
    - /docs/v0.32.0/development/clang-format/
    - /docs/v0.33.0/development/clang-format/
    - /docs/v0.34.0/development/clang-format/
    - /docs/v0.35.0/development/clang-format/
    - /docs/v0.36.0/development/clang-format/
    - /docs/v0.36.3/development/clang-format/
    - /docs/v0.36.4/development/clang-format/
    - /docs/v0.36.5/development/clang-format/
    - /docs/v0.36.6/development/clang-format/
    - /docs/v0.36.7/development/clang-format/
    - /docs/v0.36.8/development/clang-format/
    - /docs/v0.36.9/development/clang-format/
    - /docs/v0.36.10/development/clang-format/
    - /docs/v0.36.11/development/clang-format/
    - /docs/v0.37.0/development/clang-format/
    - /docs/v0.37.1/development/clang-format/
    - /docs/v0.37.2/development/clang-format/
    - /docs/v0.37.3/development/clang-format/
    - /docs/v0.37.4/development/clang-format/
    - /docs/v0.37.5/development/clang-format/
    - /docs/v0.37.6/development/clang-format/
    - /docs/v0.37.7/development/clang-format/
    - /docs/v0.37.8/development/clang-format/
    - /docs/latest/development/clang-format/
source_url: 'https://github.com/electron/electron/blob/master/docs/development/clang-format.md'
title: "Using clang-format on C++ Code"
sort_title: "using clang-format on c++ code"
---

# Using clang-format on C++ Code

[`clang-format`](http://clang.llvm.org/docs/ClangFormat.html) is a tool to
automatically format C/C++/Objective-C code, so that developers don't need to
worry about style issues during code reviews.

It is highly recommended to format your changed C++ code before opening pull
requests, which will save you and the reviewers' time.

You can install `clang-format` and `git-clang-format` via
`npm install -g clang-format`.

To automatically format a file according to Electron C++ code style, simply run
`clang-format -i path/to/electron/file.cc`. It should work on macOS/Linux/Windows.

The workflow to format your changed code:

1. Make codes changes in Electron repository.
2. Run `git add your_changed_file.cc`.
3. Run `git-clang-format`, and you will probably see modifications in
  `your_changed_file.cc`, these modifications are generated from `clang-format`.
4. Run `git add your_changed_file.cc`, and commit your change.
5. Now the branch is ready to be opened as a pull request.

If you want to format the changed code on your latest git commit (HEAD), you can
run `git-clang-format HEAD~1`. See `git-clang-format -h` for more details.

## Editor Integration

You can also integrate `clang-format` directly into your favorite editors.
For further guidance on setting up editor integration, see these pages:

  * [Atom](https://atom.io/packages/clang-format)
  * [Vim & Emacs](http://clang.llvm.org/docs/ClangFormat.html#vim-integration)
