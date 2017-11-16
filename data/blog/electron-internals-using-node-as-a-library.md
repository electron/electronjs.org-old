---
title: 'Electron Internals&#58; Using Node as a Library'
author: zcbenz
date: '2016-08-08'
---

This is the second post in an ongoing series explaining the internals of
Electron. Check out the [first post][event-loop] about event loop integration
if you haven't already.

Most people use [Node](https://nodejs.org) for server-side applications, but because of Node's rich
API set and thriving community, it is also a great fit for an embedded library.
This post explains how Node is used as a library in Electron.

---

## Build system

Both Node and Electron use [`GYP`][gyp] as their build systems. If you want to embed
Node inside your app, you have to use it as your build system too.

New to `GYP`? Read [this guide][gyp-docs] before you continue further in this post.

## Node's flags

The [`node.gyp`][nodegyp] file in Node's source code directory describes how Node
is built, along with lots of [`GYP`][gyp] variables controlling which parts of
Node are enabled and whether to open certain configurations.

To change the build flags, you need to set the variables in the `.gypi` file of
your project. The `configure` script in Node can generate some common
configurations for you, for example running `./configure --shared` will generate
a `config.gypi` with variables instructing Node to be built as a shared library.

Electron does not use the `configure` script since it has its own build scripts.
The configurations for Node are defined in the [`common.gypi`][commongypi] file
in Electron's root source code directory.

## Link Node with Electron

In Electron, Node is being linked as a shared library by setting the `GYP`
variable `node_shared` to `true`, so Node's build type will be changed from
`executable` to `shared_library`, and the source code containing the Node's `main`
entry point will not be compiled.

Since Electron uses the V8 library shipped with Chromium, the V8 library
included in Node's source code is not used. This is done by setting both
`node_use_v8_platform` and `node_use_bundled_v8` to `false`.

## Shared library or static library

When linking with Node, there are two options: you can either build Node as a
static library and include it in the final executable, or you can build it as a
shared library and ship it alongside the final executable.

In Electron, Node was built as a static library for a long time. This made the
build simple, enabled the best compiler optimizations, and allowed Electron to
be distributed without an extra `node.dll` file.

However, this changed after Chrome switched to use [BoringSSL][boringssl]. BoringSSL is a
fork of [OpenSSL][openssl] that removes several unused APIs and changes many existing
interfaces. Because Node still uses OpenSSL, the compiler would generate numerous
linking errors due to conflicting symbols if they were linked together.

Electron couldn't use BoringSSL in Node, or use OpenSSL in Chromium, so the only
option was to switch to building Node as a shared library, and
[hide the BoringSSL and OpenSSL symbols][openssl-hide] in the components of each.

This change brought Electron some positive side effects. Before this
change, you could not rename the executable file of Electron on Windows if you
used native modules because the name of the executable was hard coded in the
import library. After Node was built as a shared library, this limitation was gone
because all native modules were linked to `node.dll`, whose name didn't need to
be changed.

## Supporting native modules

[Native modules][native-modules] in Node work by defining an entry function for Node to load,
and then searching the symbols of V8 and libuv from Node. This is a bit
troublesome for embedders because by default the symbols of V8 and libuv are
hidden when building Node as a library and native modules will fail to load
because they cannot find the symbols.

So in order to make native modules work, the V8 and libuv symbols
were exposed in Electron. For V8 this is done by [forcing all
symbols in Chromium's configuration file to be exposed][v8-expose]. For libuv,
it is achieved by [setting the `BUILDING_UV_SHARED=1` definition][libuv-expose].

## Starting Node in your app

After all the work of building and linking with Node, the final step is to run
Node in your app.

Node doesn't provide many public APIs for embedding itself into other apps.
Usually, you can just call [`node::Start` and `node::Init`][node-start] to start
a new instance of Node. However, if you are building a complex app based on Node,
you have to use APIs like `node::CreateEnvironment` to precisely control every
step.

In Electron, Node is started in two modes: the standalone mode that runs in the
main process, which is similar to official Node binaries, and the embedded mode
which inserts Node APIs into web pages. The details of this will be explained
in a future post.

[gyp]: https://gyp.gsrc.io
[nodegyp]: https://github.com/nodejs/node/blob/v6.3.1/node.gyp
[commongypi]: https://github.com/electron/electron/blob/master/common.gypi
[openssl-hide]: https://github.com/electron/electron/blob/v1.3.2/common.gypi#L209-L218
[v8-expose]: https://github.com/electron/libchromiumcontent/blob/v51.0.2704.61/chromiumcontent/chromiumcontent.gypi#L104-L122
[libuv-expose]: https://github.com/electron/electron/blob/v1.3.2/common.gypi#L219-L228
[node-start]: https://github.com/nodejs/node/blob/v6.3.1/src/node.h#L187-L191
[event-loop]: https://electronjs.org/blog/2016/07/28/electron-internals-node-integration
[gyp-docs]: https://gyp.gsrc.io/docs/UserDocumentation.md
[native-modules]: https://nodejs.org/api/addons.html
[boringssl]: https://boringssl.googlesource.com/boringssl
[openssl]: https://www.openssl.org

