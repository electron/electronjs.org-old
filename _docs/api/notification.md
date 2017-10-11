---
version: v1.7.9
permalink: /docs/api/notification/
category: API
redirect_from:
  - /docs/v0.37.8/api/notification/
  - /docs/v0.37.7/api/notification/
  - /docs/v0.37.6/api/notification/
  - /docs/v0.37.5/api/notification/
  - /docs/v0.37.4/api/notification/
  - /docs/v0.37.3/api/notification/
  - /docs/v0.37.1/api/notification/
  - /docs/v0.37.0/api/notification/
  - /docs/v0.36.12/api/notification/
  - /docs/v0.36.11/api/notification/
  - /docs/v0.36.10/api/notification/
  - /docs/v0.36.9/api/notification/
  - /docs/v0.36.8/api/notification/
  - /docs/v0.36.7/api/notification/
  - /docs/v0.36.6/api/notification/
  - /docs/v0.36.5/api/notification/
  - /docs/v0.36.4/api/notification/
  - /docs/v0.36.3/api/notification/
  - /docs/v0.36.2/api/notification/
  - /docs/v0.36.0/api/notification/
  - /docs/v0.35.5/api/notification/
  - /docs/v0.35.4/api/notification/
  - /docs/v0.35.3/api/notification/
  - /docs/v0.35.2/api/notification/
  - /docs/v0.35.1/api/notification/
  - /docs/v0.34.4/api/notification/
  - /docs/v0.34.3/api/notification/
  - /docs/v0.34.2/api/notification/
  - /docs/v0.34.1/api/notification/
  - /docs/v0.34.0/api/notification/
  - /docs/v0.33.9/api/notification/
  - /docs/v0.33.8/api/notification/
  - /docs/v0.33.7/api/notification/
  - /docs/v0.33.6/api/notification/
  - /docs/v0.33.4/api/notification/
  - /docs/v0.33.3/api/notification/
  - /docs/v0.33.2/api/notification/
  - /docs/v0.33.1/api/notification/
  - /docs/v0.33.0/api/notification/
  - /docs/v0.32.3/api/notification/
  - /docs/v0.32.2/api/notification/
  - /docs/v0.31.2/api/notification/
  - /docs/v0.31.0/api/notification/
  - /docs/v0.30.4/api/notification/
  - /docs/v0.29.2/api/notification/
  - /docs/v0.29.1/api/notification/
  - /docs/v0.28.3/api/notification/
  - /docs/v0.28.2/api/notification/
  - /docs/v0.28.1/api/notification/
  - /docs/v0.28.0/api/notification/
  - /docs/v0.27.3/api/notification/
  - /docs/v0.27.2/api/notification/
  - /docs/v0.27.1/api/notification/
  - /docs/v0.27.0/api/notification/
  - /docs/v0.26.1/api/notification/
  - /docs/v0.26.0/api/notification/
  - /docs/v0.25.3/api/notification/
  - /docs/v0.25.2/api/notification/
  - /docs/v0.25.1/api/notification/
  - /docs/v0.25.0/api/notification/
  - /docs/v0.24.0/api/notification/
  - /docs/v0.23.0/api/notification/
  - /docs/v0.22.3/api/notification/
  - /docs/v0.22.2/api/notification/
  - /docs/v0.22.1/api/notification/
  - /docs/v0.21.3/api/notification/
  - /docs/v0.21.2/api/notification/
  - /docs/v0.21.1/api/notification/
  - /docs/v0.21.0/api/notification/
  - /docs/v0.20.8/api/notification/
  - /docs/v0.20.7/api/notification/
  - /docs/v0.20.6/api/notification/
  - /docs/v0.20.5/api/notification/
  - /docs/v0.20.4/api/notification/
  - /docs/v0.20.3/api/notification/
  - /docs/v0.20.2/api/notification/
  - /docs/v0.20.1/api/notification/
  - /docs/v0.20.0/api/notification/
  - /docs/latest/api/notification/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/notification.md'
title: Notification
excerpt: Create OS desktop notifications
sort_title: notification
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

    https://github.com/electron/electron/blob/master/docs/api/notification.md

    Thanks!

-->
# Notification

> Create OS desktop notifications

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

## Using in the renderer process

If you want to show Notifications from a renderer process you should use the [HTML5 Notification API]({{site.baseurl}}/docs/tutorial/notifications)

## Class: Notification

> Create OS desktop notifications

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

`Notification` is an [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

It creates a new `Notification` with native properties as set by the `options`.

### Static Methods

The `Notification` class has the following static methods:

#### `Notification.isSupported()`

Returns `Boolean` - Whether or not desktop notifications are supported on the current system

### `new Notification([options])` _Experimental_

*   `options` Object
    *   `title` String - A title for the notification, which will be shown at the top of the notification window when it is shown
    *   `subtitle` String - (optional) A subtitle for the notification, which will be displayed below the title. _macOS_
    *   `body` String - The body text of the notification, which will be displayed below the title or subtitle
    *   `silent` Boolean - (optional) Whether or not to emit an OS notification noise when showing the notification
    *   `icon` [NativeImage]({{site.baseurl}}/docs/api/native-image) - (optional) An icon to use in the notification
    *   `hasReply` Boolean - (optional) Whether or not to add an inline reply option to the notification. _macOS_
    *   `replyPlaceholder` String - (optional) The placeholder to write in the inline reply input field. _macOS_
    *   `sound` String - (optional) The name of the sound file to play when the notification is shown. _macOS_
    *   `actions` [NotificationAction[]]({{site.baseurl}}/docs/api/structures/notification-action) - (optional) Actions to add to the notification. Please read the available actions and limitations in the `NotificationAction` documentation _macOS_

### Instance Events

Objects created with `new Notification` emit the following events:

**Note:** Some events are only available on specific operating systems and are labeled as such.

#### Event: 'show'

Returns:

*   `event` Event

Emitted when the notification is shown to the user, note this could be fired multiple times as a notification can be shown multiple times through the `show()` method.

#### Event: 'click'

Returns:

*   `event` Event

Emitted when the notification is clicked by the user.

#### Event: 'close'

Returns:

*   `event` Event

Emitted when the notification is closed by manual intervention from the user.

This event is not guarunteed to be emitted in all cases where the notification is closed.

#### Event: 'reply' _macOS_

Returns:

*   `event` Event
*   `reply` String - The string the user entered into the inline reply field

Emitted when the user clicks the "Reply" button on a notification with `hasReply: true`.

#### Event: 'action' _macOS_

Returns:

*   `event` Event
*   `index` Number - The index of the action that was activated

### Instance Methods

Objects created with `new Notification` have the following instance methods:

#### `notification.show()`

Immediately shows the notification to the user, please note this means unlike the HTML5 Notification implementation, simply instantiating a `new Notification` does not immediately show it to the user, you need to call this method before the OS will display it.

### Playing Sounds

On macOS, you can specify the name of the sound you'd like to play when the notification is shown. Any of the default sounds (under System Preferences > Sound) can be used, in addition to custom sound files. Be sure that the sound file is copied under the app bundle (e.g., `YourApp.app/Contents/Resources`), or one of the following locations:

*   `~/Library/Sounds`
*   `/Library/Sounds`
*   `/Network/Library/Sounds`
*   `/System/Library/Sounds`

See the [`NSSound`](https://developer.apple.com/documentation/appkit/nssound) docs for more information.
