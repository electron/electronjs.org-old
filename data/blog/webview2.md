---
title: WebView2 and Electron
author:
- electron
date: '2021-07-22'
---

Over the past weeks, we’ve received several questions about the differences between the new [WebView2](https://docs.microsoft.com/en-us/microsoft-edge/webview2/) and Electron.

Both teams have the expressed goal of making web-tech the best it can be on the Desktop,
and a shared comprehensive comparison is being discussed.

Electron and WebView2 are fast-moving and constantly evolving projects.
We have assembled a brief snapshot of similarities and differences between Electron and WebView2 as they exist today.

---

## Architecture Overview

Electron and WebView2 both build from the Chromium source for rendering web content.
Strictly speaking, WebView2 builds from the Edge source, but Edge is built using a fork of the Chromium source.
Electron does not share any DLLs with Chrome. 
WebView2 binaries hard link against Edge (Stable channel as of Edge 90), so they share disk and some working set.
See [Evergreen distribution mode](https://docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/distribution#evergreen-distribution-mode) for more info.

Electron apps always bundle and distribute the exact version of Electron with which they were developed.
WebView2 has two options in distribution.
You can bundle the exact WebView2 library your application was developed with, or you can use a shared-runtime version that may already be present on the system.
WebView2 provides tools for each approach, including a bootstrapping installer in case the shared runtime is missing.
WebView2 is shipped _inbox_ starting with Windows 11.

Applications that bundle their frameworks are responsible for updating those frameworks, including minor security releases.
For apps using the shared WebView2 runtime, WebView2 has its own updater, similar to Chrome or Edge, that runs independent of your application. 
Updating the application's code or any of its other dependencies is still a responsibility for the developer, same as with Electron.
Neither Electron nor WebView2 is managed by Windows Update.

Both Electron and WebView2 inherit Chromium’s multi-process architecture - namely, a single main process that communicates with one-or-more renderer processes.
These processes are entirely separate from other applications running on the system.
Every Electron application is a separate process tree, containing a root browser-process, some utility processes, and zero or more render processes.
WebView2 apps that use the same [user data folder](https://docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/user-data-folder) (like a suite of apps would do), share non-renderer processes.
WebView2 apps using different data folders do not share processes.

* ElectronJS Process Model:

    ![ElectronJS Process Model Diagram](/images/Electron-Architecture.png)
* WebView2 Based Application Process Model:

    ![WebView2 Process Model Diagram](/images/WebView2-Architecture.png)

Read more about [WebView2’s process model](https://docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/process-model) and [Electron’s process model](https://www.electronjs.org/docs/tutorial/process-model) here.

Electron provides APIs for common desktop application needs such as menus, file system access, notifications, and more.
WebView2 is a component meant to be integrated into an application framework such as WinForms, WPF, WinUI, or Win32.
WebView2 does not provide operating system APIs outside the web standard via JavaScript.

Node.js is integrated into Electron.
Electron applications may use any Node.js API, module, or node-native-addon from the renderer and main processes.
A WebView2 application does not assume which language or framework the rest of your application is written in.
Your JavaScript code must proxy any operating system access through the application-host process.

Electron strives to maintain compatibility with the web API, including APIs developed from the [Fugu Project](https://fugu-tracker.web.app/).
We have a [snapshot of Electron’s Fugu API compatibility](https://docs.google.com/spreadsheets/d/1APQalp8HCa-lXVOqyul369G-wjM2RcojMujgi67YaoE/edit?usp=sharing).
WebView2 maintains a similar list of [API differences from Edge](https://docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/browser-features).

Electron has a configurable security model for web content, from full-access to full-sandbox.
WebView2 content is always sandboxed.
Electron has [comprehensive security documentation](https://www.electronjs.org/docs/tutorial/security) on choosing your security model.
WebView2 also has [security best practices](https://docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/security).

The Electron source is maintained and available on GitHub.
Applications can modify can build their own _brands_ of Electron.
The WebView2 source is not available on GitHub.

Quick Summary:

|                                           | Electron        | WebView2                     |
| ----------------------------------------- | --------------: | ---------------------------: |
| Build Dependency                          | Chromium        | Edge                         |
| Source Available on GitHub                | Yes             | No                           |
| Shares Edge/Chrome DLLs                   | No              | Yes (as of Edge 90)          |
| Shared Runtime Between Applications       | No              | Optional                     |
| Application APIs                          | Yes             | No                           |
| Node.js                                   | Yes             | No                           |
| Sandbox                                   | Optional        | Always                       |
| Requires an Application Framework         | No              | Yes                          |
| Supported Platforms                       | Mac, Win, Linux | Win (Mac/Linux planned)      |
| Process Sharing Between Apps              | Never           | Optional                     |
| Framework Updates Managed By              | Application     | WebView2                     |

## Performance Discussion

When it comes to rendering your web content, we expect little performance difference between Electron, WebView2, and any other Chromium-based renderer.
We created [scaffolding for apps built using Electron, C++ + WebView2, and C# + WebView2](https://github.com/crossplatform-dev/xplat-challenges) for those interested to investigate potential performance differences.

There are a few differences that come into play _outside_ of rendering web content,
and folks from Electron, WebView2, Edge, and others have expressed interest in working on a detailed comparison including PWAs.

### Inter-Process Communication (IPC)

_There is one difference we want to highlight immediately, as we believe it is often a performance consideration in Electron apps._

In Chromium, the browser process acts as an IPC broker between sandboxed renderers and the rest of the system.
While Electron allows unsandboxed render processes, many apps choose to enable the sandbox for added security.
WebView2 always has the sandbox enabled, so for most Electron and WebView2 apps IPC can impact overall performance.

Even though Electron and WebView2 have a similar process models, the underlying IPC differs.
Communicating between JavaScript and C++ or C# requires [marshalling](https://en.wikipedia.org/wiki/Marshalling_(computer_science)),
most commonly to a JSON string. JSON serialization/parsing is an expensive operation, and IPC-bottlenecks can negatively impact performance.
Starting with Edge 93, WV2 will use [CBOR](https://en.wikipedia.org/wiki/CBOR) for network events.

Electron supports direct IPC between any two processes via the [MessagePorts](https://www.electronjs.org/docs/latest/tutorial/message-ports) API,
which utilize [the structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
Applications which leverage this can avoid paying the JSON-serialization tax when sending objects between processes.

## Summary

Electron and WebView2 have a number of differences, but don't expect much difference with respect to how they perform rendering web content.
Ultimately, an app’s architecture and JavaScript libraries/frameworks have a larger impact on memory and performance than anything else because _Chromium is Chromium_ regardless of where it is running.

Special thanks to the WebView2 team for reviewing this post,
and ensuring we have an up-to-date view of the WebView2 architecture.
They welcome any [feedback on the project](https://github.com/MicrosoftEdge/WebView2Feedback).
