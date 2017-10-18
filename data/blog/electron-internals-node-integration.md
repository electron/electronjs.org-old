---
title: 'Electron Internals&#58; Message Loop Integration'
author: zcbenz
date: '2016-07-28'
---

This is the first post of a series that explains the internals of Electron. This
post introduces how Node's event loop is integrated with Chromium in Electron.

---

There had been many attempts to use Node for GUI programming, like
[node-gui][node-gui] for GTK+ bindings, and [node-qt][node-qt] for QT bindings.
But none of them work in production because GUI toolkits have their own message
loops while Node uses libuv for its own event loop, and the main thread can only
run one loop at the same time. So the common trick to run GUI message loop in
Node is to pump the message loop in a timer with very small interval, which
makes GUI interface response slow and occupies lots of CPU resources.

During the development of Electron we met the same problem, though in a
reversed way: we had to integrate Node's event loop into Chromium's message
loop.

## The main process and renderer process

Before we dive into the details of message loop integration, I'll first explain
the multi-process architecture of Chromium.

In Electron there are two types of processes: the main process and the renderer
process (this is actually extremely simplified, for a complete view please see
[Multi-process Architecture][multi-process]). The main process is responsible
for GUI work like creating windows, while the renderer process only deals with
running and rendering web pages.

Electron allows using JavaScript to control both the main process and renderer
process, which means we have to integrate Node into both processes.

## Replacing Chromium's message loop with libuv

My first try was reimplementing Chromium's message loop with libuv.

It was easy for the renderer process, since its message loop only listened to
file descriptors and timers, and I only needed to implement the interface with
libuv.

However it was significantly more difficult for the main process. Each platform
has its own kind of GUI message loops. macOS Chromium uses `NSRunLoop`,
whereas Linux uses glib. I tried lots of hacks to extract the
underlying file descriptors out of the native GUI message loops, and then fed
them to libuv for iteration, but I still met edge cases that did not work.

So finally I added a timer to poll the GUI message loop in a small interval. As
a result the process took a constant CPU usage, and certain operations had
long delays.

## Polling Node's event loop in a separate thread

As libuv matured, it was then possible to take another approach.

The concept of backend fd was introduced into libuv, which is a file descriptor
(or handle) that libuv polls for its event loop. So by polling the backend fd it
is possible to get notified when there is a new event in libuv.

So in Electron I created a separate thread to poll the backend fd, and since I
was using the system calls for polling instead of libuv APIs, it was thread
safe. And whenever there was a new event in libuv's event loop, a message would
be posted to Chromium's message loop, and the events of libuv would then be
processed in the main thread.

In this way I avoided patching Chromium and Node, and the same code was used in
both the main and renderer processes.

## The code

You can find the implemention of the message loop integration in the
`node_bindings` files under [`electron/atom/common/`][node-bindings]. It can be
easily reused for projects that want to integrate Node.

[node-gui]: https://github.com/zcbenz/node-gui
[node-qt]: https://github.com/arturadib/node-qt
[multi-process]: http://dev.chromium.org/developers/design-documents/multi-process-architecture
[node-bindings]: https://github.com/electron/electron/tree/master/atom/common

