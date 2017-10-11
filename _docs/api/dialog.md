---
version: v1.7.9
permalink: /docs/api/dialog/
category: API
redirect_from:
  - /docs/v0.37.8/api/dialog/
  - /docs/v0.37.7/api/dialog/
  - /docs/v0.37.6/api/dialog/
  - /docs/v0.37.5/api/dialog/
  - /docs/v0.37.4/api/dialog/
  - /docs/v0.37.3/api/dialog/
  - /docs/v0.37.1/api/dialog/
  - /docs/v0.37.0/api/dialog/
  - /docs/v0.36.12/api/dialog/
  - /docs/v0.36.11/api/dialog/
  - /docs/v0.36.10/api/dialog/
  - /docs/v0.36.9/api/dialog/
  - /docs/v0.36.8/api/dialog/
  - /docs/v0.36.7/api/dialog/
  - /docs/v0.36.6/api/dialog/
  - /docs/v0.36.5/api/dialog/
  - /docs/v0.36.4/api/dialog/
  - /docs/v0.36.3/api/dialog/
  - /docs/v0.36.2/api/dialog/
  - /docs/v0.36.0/api/dialog/
  - /docs/v0.35.5/api/dialog/
  - /docs/v0.35.4/api/dialog/
  - /docs/v0.35.3/api/dialog/
  - /docs/v0.35.2/api/dialog/
  - /docs/v0.35.1/api/dialog/
  - /docs/v0.34.4/api/dialog/
  - /docs/v0.34.3/api/dialog/
  - /docs/v0.34.2/api/dialog/
  - /docs/v0.34.1/api/dialog/
  - /docs/v0.34.0/api/dialog/
  - /docs/v0.33.9/api/dialog/
  - /docs/v0.33.8/api/dialog/
  - /docs/v0.33.7/api/dialog/
  - /docs/v0.33.6/api/dialog/
  - /docs/v0.33.4/api/dialog/
  - /docs/v0.33.3/api/dialog/
  - /docs/v0.33.2/api/dialog/
  - /docs/v0.33.1/api/dialog/
  - /docs/v0.33.0/api/dialog/
  - /docs/v0.32.3/api/dialog/
  - /docs/v0.32.2/api/dialog/
  - /docs/v0.31.2/api/dialog/
  - /docs/v0.31.0/api/dialog/
  - /docs/v0.30.4/api/dialog/
  - /docs/v0.29.2/api/dialog/
  - /docs/v0.29.1/api/dialog/
  - /docs/v0.28.3/api/dialog/
  - /docs/v0.28.2/api/dialog/
  - /docs/v0.28.1/api/dialog/
  - /docs/v0.28.0/api/dialog/
  - /docs/v0.27.3/api/dialog/
  - /docs/v0.27.2/api/dialog/
  - /docs/v0.27.1/api/dialog/
  - /docs/v0.27.0/api/dialog/
  - /docs/v0.26.1/api/dialog/
  - /docs/v0.26.0/api/dialog/
  - /docs/v0.25.3/api/dialog/
  - /docs/v0.25.2/api/dialog/
  - /docs/v0.25.1/api/dialog/
  - /docs/v0.25.0/api/dialog/
  - /docs/v0.24.0/api/dialog/
  - /docs/v0.23.0/api/dialog/
  - /docs/v0.22.3/api/dialog/
  - /docs/v0.22.2/api/dialog/
  - /docs/v0.22.1/api/dialog/
  - /docs/v0.21.3/api/dialog/
  - /docs/v0.21.2/api/dialog/
  - /docs/v0.21.1/api/dialog/
  - /docs/v0.21.0/api/dialog/
  - /docs/v0.20.8/api/dialog/
  - /docs/v0.20.7/api/dialog/
  - /docs/v0.20.6/api/dialog/
  - /docs/v0.20.5/api/dialog/
  - /docs/v0.20.4/api/dialog/
  - /docs/v0.20.3/api/dialog/
  - /docs/v0.20.2/api/dialog/
  - /docs/v0.20.1/api/dialog/
  - /docs/v0.20.0/api/dialog/
  - /docs/latest/api/dialog/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/dialog.md'
title: dialog
excerpt: 'Display native system dialogs for opening and saving files, alerting, etc.'
sort_title: dialog
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

    https://github.com/electron/electron/blob/master/docs/api/dialog.md

    Thanks!

-->
# dialog

> Display native system dialogs for opening and saving files, alerting, etc.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

An example of showing a dialog to select multiple files and directories:

```javascript
const {dialog} = require('electron')
console.log(dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']}))
```

The Dialog is opened from Electron's main thread. If you want to use the dialog object from a renderer process, remember to access it using the remote:

```javascript
const {dialog} = require('electron').remote
console.log(dialog)
```

## Methods

The `dialog` module has the following methods:

### `dialog.showOpenDialog([browserWindow, ]options[, callback])`

*   `browserWindow` BrowserWindow (optional)
*   `options` Object
    *   `title` String (optional)
    *   `defaultPath` String (optional)
    *   `buttonLabel` String (optional) - Custom label for the confirmation button, when left empty the default label will be used.
    *   `filters` [FileFilter[]]({{site.baseurl}}/docs/api/structures/file-filter) (optional)
    *   `properties` String[] (optional) - Contains which features the dialog should use. The following values are supported:
        *   `openFile` - Allow files to be selected.
        *   `openDirectory` - Allow directories to be selected.
        *   `multiSelections` - Allow multiple paths to be selected.
        *   `showHiddenFiles` - Show hidden files in dialog.
        *   `createDirectory` - Allow creating new directories from dialog. _macOS_
        *   `promptToCreate` - Prompt for creation if the file path entered in the dialog does not exist. This does not actually create the file at the path but allows non-existent paths to be returned that should be created by the application. _Windows_
        *   `noResolveAliases` - Disable the automatic alias (symlink) path resolution. Selected aliases will now return the alias path instead of their target path. _macOS_
        *   `treatPackageAsDirectory` - Treat packages, such as `.app` folders, as a directory instead of a file. _macOS_
    *   `message` String (optional) _macOS_ - Message to display above input boxes.
*   `callback` Function (optional)
    *   `filePaths` String[] - An array of file paths chosen by the user

Returns `String[]`, an array of file paths chosen by the user, if the callback is provided it returns `undefined`.

The `browserWindow` argument allows the dialog to attach itself to a parent window, making it modal.

The `filters` specifies an array of file types that can be displayed or selected when you want to limit the user to a specific type. For example:

```javascript
{
  filters: [
    {name: 'Images', extensions: ['jpg', 'png', 'gif']},
    {name: 'Movies', extensions: ['mkv', 'avi', 'mp4']},
    {name: 'Custom File Type', extensions: ['as']},
    {name: 'All Files', extensions: ['*']}
  ]
}
```

The `extensions` array should contain extensions without wildcards or dots (e.g. `'png'` is good but `'.png'` and `'*.png'` are bad). To show all files, use the `'*'` wildcard (no other wildcard is supported).

If a `callback` is passed, the API call will be asynchronous and the result will be passed via `callback(filenames)`

**Note:** On Windows and Linux an open dialog can not be both a file selector and a directory selector, so if you set `properties` to `['openFile', 'openDirectory']` on these platforms, a directory selector will be shown.

### `dialog.showSaveDialog([browserWindow, ]options[, callback])`

*   `browserWindow` BrowserWindow (optional)
*   `options` Object
    *   `title` String (optional)
    *   `defaultPath` String (optional) - Absolute directory path, absolute file path, or file name to use by default.
    *   `buttonLabel` String (optional) - Custom label for the confirmation button, when left empty the default label will be used.
    *   `filters` [FileFilter[]]({{site.baseurl}}/docs/api/structures/file-filter) (optional)
    *   `message` String (optional) _macOS_ - Message to display above text fields.
    *   `nameFieldLabel` String (optional) _macOS_ - Custom label for the text displayed in front of the filename text field.
    *   `showsTagField` Boolean (optional) _macOS_ - Show the tags input box, defaults to `true`.
*   `callback` Function (optional)
    *   `filename` String

Returns `String`, the path of the file chosen by the user, if a callback is provided it returns `undefined`.

The `browserWindow` argument allows the dialog to attach itself to a parent window, making it modal.

The `filters` specifies an array of file types that can be displayed, see `dialog.showOpenDialog` for an example.

If a `callback` is passed, the API call will be asynchronous and the result will be passed via `callback(filename)`

### `dialog.showMessageBox([browserWindow, ]options[, callback])`

*   `browserWindow` BrowserWindow (optional)
*   `options` Object
    *   `type` String (optional) - Can be `"none"`, `"info"`, `"error"`, `"question"` or `"warning"`. On Windows, `"question"` displays the same icon as `"info"`, unless you set an icon using the `"icon"` option. On macOS, both `"warning"` and `"error"` display the same warning icon.
    *   `buttons` String[] (optional) - Array of texts for buttons. On Windows, an empty array will result in one button labeled "OK".
    *   `defaultId` Integer (optional) - Index of the button in the buttons array which will be selected by default when the message box opens.
    *   `title` String (optional) - Title of the message box, some platforms will not show it.
    *   `message` String - Content of the message box.
    *   `detail` String (optional) - Extra information of the message.
    *   `checkboxLabel` String (optional) - If provided, the message box will include a checkbox with the given label. The checkbox state can be inspected only when using `callback`.
    *   `checkboxChecked` Boolean (optional) - Initial checked state of the checkbox. `false` by default.
    *   `icon` [NativeImage]({{site.baseurl}}/docs/api/native-image) (optional)
    *   `cancelId` Integer (optional) - The index of the button to be used to cancel the dialog, via the `Esc` key. By default this is assigned to the first button with "cancel" or "no" as the label. If no such labeled buttons exist and this option is not set, `0` will be used as the return value or callback response. This option is ignored on Windows.
    *   `noLink` Boolean (optional) - On Windows Electron will try to figure out which one of the `buttons` are common buttons (like "Cancel" or "Yes"), and show the others as command links in the dialog. This can make the dialog appear in the style of modern Windows apps. If you don't like this behavior, you can set `noLink` to `true`.
    *   `normalizeAccessKeys` Boolean (optional) - Normalize the keyboard access keys across platforms. Default is `false`. Enabling this assumes `&` is used in the button labels for the placement of the keyboard shortcut access key and labels will be converted so they work correctly on each platform, `&` characters are removed on macOS, converted to `_` on Linux, and left untouched on Windows. For example, a button label of `Vie&w` will be converted to `Vie_w` on Linux and `View` on macOS and can be selected via `Alt-W` on Windows and Linux.
*   `callback` Function (optional)
    *   `response` Number - The index of the button that was clicked
    *   `checkboxChecked` Boolean - The checked state of the checkbox if `checkboxLabel` was set. Otherwise `false`.

Returns `Integer`, the index of the clicked button, if a callback is provided it returns undefined.

Shows a message box, it will block the process until the message box is closed. It returns the index of the clicked button.

The `browserWindow` argument allows the dialog to attach itself to a parent window, making it modal.

If a `callback` is passed, the dialog will not block the process. The API call will be asynchronous and the result will be passed via `callback(response)`.

### `dialog.showErrorBox(title, content)`

*   `title` String - The title to display in the error box
*   `content` String - The text content to display in the error box

Displays a modal dialog that shows an error message.

This API can be called safely before the `ready` event the `app` module emits, it is usually used to report errors in early stage of startup. If called before the app `ready`event on Linux, the message will be emitted to stderr, and no GUI dialog will appear.

### `dialog.showCertificateTrustDialog([browserWindow, ]options, callback)` _macOS_ _Windows_

*   `browserWindow` BrowserWindow (optional)
*   `options` Object
    *   `certificate` [Certificate]({{site.baseurl}}/docs/api/structures/certificate) - The certificate to trust/import.
    *   `message` String - The message to display to the user.
*   `callback` Function

On macOS, this displays a modal dialog that shows a message and certificate information, and gives the user the option of trusting/importing the certificate. If you provide a `browserWindow` argument the dialog will be attached to the parent window, making it modal.

On Windows the options are more limited, due to the Win32 APIs used:

*   The `message` argument is not used, as the OS provides its own confirmation dialog.
*   The `browserWindow` argument is ignored since it is not possible to make this confirmation dialog modal.

## Sheets

On macOS, dialogs are presented as sheets attached to a window if you provide a `BrowserWindow` reference in the `browserWindow` parameter, or modals if no window is provided.

You can call `BrowserWindow.getCurrentWindow().setSheetOffset(offset)` to change the offset from the window frame where sheets are attached.
