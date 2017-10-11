---
version: v1.7.9
permalink: /docs/tutorial/notifications/
category: Tutorial
redirect_from:
  - /docs/v0.37.8/tutorial/notifications/
  - /docs/v0.37.7/tutorial/notifications/
  - /docs/v0.37.6/tutorial/notifications/
  - /docs/v0.37.5/tutorial/notifications/
  - /docs/v0.37.4/tutorial/notifications/
  - /docs/v0.37.3/tutorial/notifications/
  - /docs/v0.37.1/tutorial/notifications/
  - /docs/v0.37.0/tutorial/notifications/
  - /docs/v0.36.12/tutorial/notifications/
  - /docs/v0.36.11/tutorial/notifications/
  - /docs/v0.36.10/tutorial/notifications/
  - /docs/v0.36.9/tutorial/notifications/
  - /docs/v0.36.8/tutorial/notifications/
  - /docs/v0.36.7/tutorial/notifications/
  - /docs/v0.36.6/tutorial/notifications/
  - /docs/v0.36.5/tutorial/notifications/
  - /docs/v0.36.4/tutorial/notifications/
  - /docs/v0.36.3/tutorial/notifications/
  - /docs/v0.36.2/tutorial/notifications/
  - /docs/v0.36.0/tutorial/notifications/
  - /docs/v0.35.5/tutorial/notifications/
  - /docs/v0.35.4/tutorial/notifications/
  - /docs/v0.35.3/tutorial/notifications/
  - /docs/v0.35.2/tutorial/notifications/
  - /docs/v0.35.1/tutorial/notifications/
  - /docs/v0.34.4/tutorial/notifications/
  - /docs/v0.34.3/tutorial/notifications/
  - /docs/v0.34.2/tutorial/notifications/
  - /docs/v0.34.1/tutorial/notifications/
  - /docs/v0.34.0/tutorial/notifications/
  - /docs/v0.33.9/tutorial/notifications/
  - /docs/v0.33.8/tutorial/notifications/
  - /docs/v0.33.7/tutorial/notifications/
  - /docs/v0.33.6/tutorial/notifications/
  - /docs/v0.33.4/tutorial/notifications/
  - /docs/v0.33.3/tutorial/notifications/
  - /docs/v0.33.2/tutorial/notifications/
  - /docs/v0.33.1/tutorial/notifications/
  - /docs/v0.33.0/tutorial/notifications/
  - /docs/v0.32.3/tutorial/notifications/
  - /docs/v0.32.2/tutorial/notifications/
  - /docs/v0.31.2/tutorial/notifications/
  - /docs/v0.31.0/tutorial/notifications/
  - /docs/v0.30.4/tutorial/notifications/
  - /docs/v0.29.2/tutorial/notifications/
  - /docs/v0.29.1/tutorial/notifications/
  - /docs/v0.28.3/tutorial/notifications/
  - /docs/v0.28.2/tutorial/notifications/
  - /docs/v0.28.1/tutorial/notifications/
  - /docs/v0.28.0/tutorial/notifications/
  - /docs/v0.27.3/tutorial/notifications/
  - /docs/v0.27.2/tutorial/notifications/
  - /docs/v0.27.1/tutorial/notifications/
  - /docs/v0.27.0/tutorial/notifications/
  - /docs/v0.26.1/tutorial/notifications/
  - /docs/v0.26.0/tutorial/notifications/
  - /docs/v0.25.3/tutorial/notifications/
  - /docs/v0.25.2/tutorial/notifications/
  - /docs/v0.25.1/tutorial/notifications/
  - /docs/v0.25.0/tutorial/notifications/
  - /docs/v0.24.0/tutorial/notifications/
  - /docs/v0.23.0/tutorial/notifications/
  - /docs/v0.22.3/tutorial/notifications/
  - /docs/v0.22.2/tutorial/notifications/
  - /docs/v0.22.1/tutorial/notifications/
  - /docs/v0.21.3/tutorial/notifications/
  - /docs/v0.21.2/tutorial/notifications/
  - /docs/v0.21.1/tutorial/notifications/
  - /docs/v0.21.0/tutorial/notifications/
  - /docs/v0.20.8/tutorial/notifications/
  - /docs/v0.20.7/tutorial/notifications/
  - /docs/v0.20.6/tutorial/notifications/
  - /docs/v0.20.5/tutorial/notifications/
  - /docs/v0.20.4/tutorial/notifications/
  - /docs/v0.20.3/tutorial/notifications/
  - /docs/v0.20.2/tutorial/notifications/
  - /docs/v0.20.1/tutorial/notifications/
  - /docs/v0.20.0/tutorial/notifications/
  - /docs/latest/tutorial/notifications/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/tutorial/notifications.md
title: 'Notifications (Windows, Linux, macOS)'
excerpt: ''
sort_title: notifications
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

    https://github.com/electron/electron/blob/master/docs/tutorial/notifications.md

    Thanks!

-->
# Notifications (Windows, Linux, macOS)

All three operating systems provide means for applications to send notifications to the user. Electron conveniently allows developers to send notifications with the [HTML5 Notification API](https://notifications.spec.whatwg.org/), using the currently running operating system's native notification APIs to display it.

**Note:** Since this is an HTML5 API it is only available in the renderer process. If you want to show Notifications in the main process please check out the [Notification]({{site.baseurl}}/docs/api/notification) module.

```javascript
let myNotification = new Notification('Title', {
  body: 'Lorem Ipsum Dolor Sit Amet'
})

myNotification.onclick = () => {
  console.log('Notification clicked')
}
```

While code and user experience across operating systems are similar, there are subtle differences.

## Windows

*   On Windows 10, notifications "just work".
*   On Windows 8.1 and Windows 8, a shortcut to your app, with an [Application User Model ID][app-user-model-id], must be installed to the Start screen. Note, however, that it does not need to be pinned to the Start screen.
*   On Windows 7, notifications work via a custom implementation which visually resembles the native one on newer systems.

Furthermore, in Windows 8, the maximum length for the notification body is 250 characters, with the Windows team recommending that notifications should be kept to 200 characters. That said, that limitation has been removed in Windows 10, with the Windows team asking developers to be reasonable. Attempting to send gigantic amounts of text to the API (thousands of characters) might result in instability.

### Advanced Notifications

Later versions of Windows allow for advanced notifications, with custom templates, images, and other flexible elements. To send those notifications (from either the main process or the renderer process), use the userland module [electron-windows-notifications](https://github.com/felixrieseberg/electron-windows-notifications), which uses native Node addons to send `ToastNotification` and `TileNotification` objects.

While notifications including buttons work with just `electron-windows-notifications`, handling replies requires the use of [`electron-windows-interactive-notifications`](https://github.com/felixrieseberg/electron-windows-interactive-notifications), which helps with registering the required COM components and calling your Electron app with the entered user data.

### Quiet Hours / Presentation Mode

To detect whether or not you're allowed to send a notification, use the userland module [electron-notification-state](https://github.com/felixrieseberg/electron-notification-state).

This allows you to determine ahead of time whether or not Windows will silently throw the notification away.

## macOS

Notifications are straight-forward on macOS, but you should be aware of [Apple's Human Interface guidelines regarding notifications](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/OSXHIGuidelines/NotificationCenter.html).

Note that notifications are limited to 256 bytes in size and will be truncated if you exceed that limit.

### Advanced Notifications

Later versions of macOS allow for notifications with an input field, allowing the user to quickly reply to a notification. In order to send notifications with an input field, use the userland module [node-mac-notifier](https://github.com/CharlieHess/node-mac-notifier).

### Do not disturb / Session State

To detect whether or not you're allowed to send a notification, use the userland module [electron-notification-state](https://github.com/felixrieseberg/electron-notification-state).

This will allow you to detect ahead of time whether or not the notification will be displayed.

## Linux

Notifications are sent using `libnotify` which can show notifications on any desktop environment that follows [Desktop Notifications Specification][notification-spec], including Cinnamon, Enlightenment, Unity, GNOME, KDE.
