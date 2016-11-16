---
version: v1.4.7
category: Development
redirect_from:
    - /docs/v0.24.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.25.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.26.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.27.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.28.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.29.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.30.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.31.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.32.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.33.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.34.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.35.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.36.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.36.3/development/atom-shell-vs-node-webkit/
    - /docs/v0.36.4/development/atom-shell-vs-node-webkit/
    - /docs/v0.36.5/development/atom-shell-vs-node-webkit/
    - /docs/v0.36.6/development/atom-shell-vs-node-webkit/
    - /docs/v0.36.7/development/atom-shell-vs-node-webkit/
    - /docs/v0.36.8/development/atom-shell-vs-node-webkit/
    - /docs/v0.36.9/development/atom-shell-vs-node-webkit/
    - /docs/v0.36.10/development/atom-shell-vs-node-webkit/
    - /docs/v0.36.11/development/atom-shell-vs-node-webkit/
    - /docs/v0.37.0/development/atom-shell-vs-node-webkit/
    - /docs/v0.37.1/development/atom-shell-vs-node-webkit/
    - /docs/v0.37.2/development/atom-shell-vs-node-webkit/
    - /docs/v0.37.3/development/atom-shell-vs-node-webkit/
    - /docs/v0.37.4/development/atom-shell-vs-node-webkit/
    - /docs/v0.37.5/development/atom-shell-vs-node-webkit/
    - /docs/v0.37.6/development/atom-shell-vs-node-webkit/
    - /docs/v0.37.7/development/atom-shell-vs-node-webkit/
    - /docs/v0.37.8/development/atom-shell-vs-node-webkit/
    - /docs/latest/development/atom-shell-vs-node-webkit/
source_url: 'https://github.com/electron/electron/blob/master/docs/development/atom-shell-vs-node-webkit.md'
title: "Technical Differences Between Electron and NW.js (formerly node-webkit)"
sort_title: "technical differences between electron and nw.js (formerly node-webkit)"
---

# Technical Differences Between Electron and NW.js (formerly node-webkit)

__Note: Electron was previously named Atom Shell.__

Like NW.js, Electron provides a platform to write desktop applications
with JavaScript and HTML and has Node integration to grant access to the low
level system from web pages.

But there are also fundamental differences between the two projects that make
Electron a completely separate product from NW.js:

__1. Entry of Application__

In NW.js the main entry point of an application is a web page. You specify a
main page URL in the `package.json` and it is opened in a browser window as
the application's main window.

In Electron, the entry point is a JavaScript script. Instead of
providing a URL directly, you manually create a browser window and load
an HTML file using the API. You also need to listen to window events
to decide when to quit the application.

Electron works more like the Node.js runtime. Electron's APIs are lower level
so you can use it for browser testing in place of [PhantomJS](http://phantomjs.org/).

__2. Build System__

In order to avoid the complexity of building all of Chromium, Electron uses [`libchromiumcontent`](https://github.com/brightray/libchromiumcontent) to access
Chromium's Content API. `libchromiumcontent` is a single shared library that
includes the Chromium Content module and all of its dependencies. Users don't
need a powerful machine to build Electron.

__3. Node Integration__

In NW.js, the Node integration in web pages requires patching Chromium to
work, while in Electron we chose a different way to integrate the libuv loop
with each platform's message loop to avoid hacking Chromium. See the
[`node_bindings`][node-bindings] code for how that was done.

__4. Multi-context__

If you are an experienced NW.js user, you should be familiar with the
concept of Node context and web context. These concepts were invented because
of how NW.js was implemented.

By using the [multi-context](http://strongloop.com/strongblog/whats-new-node-js-v0-12-multiple-context-execution/)
feature of Node, Electron doesn't introduce a new JavaScript context in web
pages.

Note: NW.js has optionally supported multi-context since 0.13.

[node-bindings]: https://github.com/electron/electron/tree/master/atom/common
