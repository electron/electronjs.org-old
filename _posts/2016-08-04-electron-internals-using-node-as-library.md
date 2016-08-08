---
title: Electron Internals&#58; Using Node as a Library
author: zcbenz
---

Most people use [Node](https://nodejs.org) for server scripting, but because of Node's rich API set
and popular community, it is also a good fit for an embedded library. This post
explains how Node is used as a library in Electron.

---

## Building system

Both Node and Electron use Chromium's [`GYP`][gyp] library as a building system.
[`GYP`][gyp] is a build system that generates other build systems and if you
want to embed Node inside your app, you'll need to use it too. It is also
recommended to get a good knowledge of how [`GYP`][gyp] works before you
continue reading.

## Node's flags

The [`node.gyp`][nodegyp] file in Node's source code directory describes how Node
is built, along with lots of [`GYP`][gyp] variables controlling which parts of
Node are enabled and whether to open certain configurations.

To change the build flags, you need to set the variables in the `gypi` file of
your project. The `configure` script in Node can generate some common
configurations for you, for example running `./configure --shared` will generate
a `config.gypi` with variables instructing Node to be built as a shared library.

In Electron, however, we are not using the `configure` script since we have our
own scripts, and the configurations for Node are written in the
[`common.gypi`][commongypi] file under Electron's source code directory.

## Link Node with Electron

In Electron, Node is being linked as a shared library by setting the `GYP`
variable `node_shared` to `true`, so Node's build type will be changed from
`executable` to `shared_library`, and the source code containing the `main` entry
will also be excluded from compiling.

Also since Electron uses the V8 library shipped with Chromium, the V8 library
included in Node's source code is not used. This is done by setting both
`node_use_v8_platform` and `node_use_bundled_v8` to `false`.

## Shared library or static library

When linking with Node, there are two options: we can either build Node as a
static library and include it in the final executable, or we can build it as a
shared library and ship it alongside the final executable.

In Electron we used to build Node as a static library for a long time, so the
building model was simple, we got the best optimization from the compiler, and we didn't
need to ship an extra `node.dll`.

However, this changed after Chrome switched to use BoringSSL. The BoringSSL is a
fork of OpenSSL that strips lots of unused APIs and changes many existing
interfaces. Node still uses the OpenSSL, so when we linked them together
the compiler would explode, generating numerous linking errors due to
conflicting symbols.

We could neither use BoringSSL in Node, nor use OpenSSL in Chromium, so the only
option was to build Node as a shared library, and [hide symbols of BoringSSL
and OpenSSL][openssl-hide] in the components of each.

This change brought Electron some positive side effects. Before this
change, you could not rename the executable file of Electron on Windows if you
used native modules because the name of the executable was hard coded in the
import library. After Node got built as shared library, this limitation was gone
because all native modules are linked to `node.dll`, whose name doesn't need to
be changed.

## Supporting native modules

Native modules in Node work by defining an entry function for Node to load,
and then searching the symbols of V8 and libuv from Node. This is a bit
troubling for embedders because by default the symbols of V8 and libuv are
hidden when building Node as a library, and native modules will fail to load
because they cannot find symbols.

So in order to make native modules work for Electron, we have to expose symbols
of V8 and libuv in Electron. For V8 this is done by [forcing exposing all
symbols in Chromium's configuration file][v8-expose]. For libuv, it is achieved
by [setting the `BUILDING_UV_SHARED=1` definition][libuv-expose].

## Starting Node in your app

After all the work of building and linking with Node, the final step is to run
Node in your app.

Node doesn't provide many public APIs for embedding itself into other apps.
Usually, you can just call [`node::Start` and `node::Init`][node-start] to start
a new instance of Node. However if you are building a complex app based on Node,
you have to use APIs like `node::CreateEnvironment` to precisely control every
step.

In Electron, Node is started in two modes: the standalone mode that runs in the
main process, which is similar to official Node binaries; and the embedded mode
which inserts Node APIs into web pages. I'll explain the details in future
posts.

[gyp]: https://gyp.gsrc.io
[nodegyp]: https://github.com/nodejs/node/blob/v6.3.1/node.gyp
[commongypi]: https://github.com/electron/electron/blob/master/common.gypi
[openssl-hide]: https://github.com/electron/electron/blob/v1.3.2/common.gypi#L209-L218
[v8-expose]: https://github.com/electron/libchromiumcontent/blob/v51.0.2704.61/chromiumcontent/chromiumcontent.gypi#L104-L122
[libuv-expose]: https://github.com/electron/electron/blob/v1.3.2/common.gypi#L219-L228
[node-start]: https://github.com/nodejs/node/blob/v6.3.1/src/node.h#L187-L191
