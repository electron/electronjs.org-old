---
version: v1.7.9
permalink: /docs/api/cookies/
category: API
redirect_from:
  - /docs/v0.37.8/api/cookies/
  - /docs/v0.37.7/api/cookies/
  - /docs/v0.37.6/api/cookies/
  - /docs/v0.37.5/api/cookies/
  - /docs/v0.37.4/api/cookies/
  - /docs/v0.37.3/api/cookies/
  - /docs/v0.37.1/api/cookies/
  - /docs/v0.37.0/api/cookies/
  - /docs/v0.36.12/api/cookies/
  - /docs/v0.36.11/api/cookies/
  - /docs/v0.36.10/api/cookies/
  - /docs/v0.36.9/api/cookies/
  - /docs/v0.36.8/api/cookies/
  - /docs/v0.36.7/api/cookies/
  - /docs/v0.36.6/api/cookies/
  - /docs/v0.36.5/api/cookies/
  - /docs/v0.36.4/api/cookies/
  - /docs/v0.36.3/api/cookies/
  - /docs/v0.36.2/api/cookies/
  - /docs/v0.36.0/api/cookies/
  - /docs/v0.35.5/api/cookies/
  - /docs/v0.35.4/api/cookies/
  - /docs/v0.35.3/api/cookies/
  - /docs/v0.35.2/api/cookies/
  - /docs/v0.35.1/api/cookies/
  - /docs/v0.34.4/api/cookies/
  - /docs/v0.34.3/api/cookies/
  - /docs/v0.34.2/api/cookies/
  - /docs/v0.34.1/api/cookies/
  - /docs/v0.34.0/api/cookies/
  - /docs/v0.33.9/api/cookies/
  - /docs/v0.33.8/api/cookies/
  - /docs/v0.33.7/api/cookies/
  - /docs/v0.33.6/api/cookies/
  - /docs/v0.33.4/api/cookies/
  - /docs/v0.33.3/api/cookies/
  - /docs/v0.33.2/api/cookies/
  - /docs/v0.33.1/api/cookies/
  - /docs/v0.33.0/api/cookies/
  - /docs/v0.32.3/api/cookies/
  - /docs/v0.32.2/api/cookies/
  - /docs/v0.31.2/api/cookies/
  - /docs/v0.31.0/api/cookies/
  - /docs/v0.30.4/api/cookies/
  - /docs/v0.29.2/api/cookies/
  - /docs/v0.29.1/api/cookies/
  - /docs/v0.28.3/api/cookies/
  - /docs/v0.28.2/api/cookies/
  - /docs/v0.28.1/api/cookies/
  - /docs/v0.28.0/api/cookies/
  - /docs/v0.27.3/api/cookies/
  - /docs/v0.27.2/api/cookies/
  - /docs/v0.27.1/api/cookies/
  - /docs/v0.27.0/api/cookies/
  - /docs/v0.26.1/api/cookies/
  - /docs/v0.26.0/api/cookies/
  - /docs/v0.25.3/api/cookies/
  - /docs/v0.25.2/api/cookies/
  - /docs/v0.25.1/api/cookies/
  - /docs/v0.25.0/api/cookies/
  - /docs/v0.24.0/api/cookies/
  - /docs/v0.23.0/api/cookies/
  - /docs/v0.22.3/api/cookies/
  - /docs/v0.22.2/api/cookies/
  - /docs/v0.22.1/api/cookies/
  - /docs/v0.21.3/api/cookies/
  - /docs/v0.21.2/api/cookies/
  - /docs/v0.21.1/api/cookies/
  - /docs/v0.21.0/api/cookies/
  - /docs/v0.20.8/api/cookies/
  - /docs/v0.20.7/api/cookies/
  - /docs/v0.20.6/api/cookies/
  - /docs/v0.20.5/api/cookies/
  - /docs/v0.20.4/api/cookies/
  - /docs/v0.20.3/api/cookies/
  - /docs/v0.20.2/api/cookies/
  - /docs/v0.20.1/api/cookies/
  - /docs/v0.20.0/api/cookies/
  - /docs/latest/api/cookies/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/cookies.md'
title: Cookies
excerpt: Query and modify a session&apos;s cookies.
sort_title: cookies
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

    https://github.com/electron/electron/blob/master/docs/api/cookies.md

    Thanks!

-->
## Class: Cookies

> Query and modify a session's cookies.

Process: [Main]({{site.baseurl}}/docs/glossary#main-process)

Instances of the `Cookies` class are accessed by using `cookies` property of a `Session`.

For example:

```javascript
const {session} = require('electron')

// Query all cookies.
session.defaultSession.cookies.get({}, (error, cookies) => {
  console.log(error, cookies)
})

// Query all cookies associated with a specific url.
session.defaultSession.cookies.get({url: 'http://www.github.com'}, (error, cookies) => {
  console.log(error, cookies)
})

// Set a cookie with the given cookie data;
// may overwrite equivalent cookies if they exist.
const cookie = {url: 'http://www.github.com', name: 'dummy_name', value: 'dummy'}
session.defaultSession.cookies.set(cookie, (error) => {
  if (error) console.error(error)
})
```

### Instance Events

The following events are available on instances of `Cookies`:

#### Event: 'changed'

*   `event` Event
*   `cookie` [Cookie]({{site.baseurl}}/docs/api/structures/cookie) - The cookie that was changed
*   `cause` String - The cause of the change with one of the following values:
    *   `explicit` - The cookie was changed directly by a consumer's action.
    *   `overwrite` - The cookie was automatically removed due to an insert operation that overwrote it.
    *   `expired` - The cookie was automatically removed as it expired.
    *   `evicted` - The cookie was automatically evicted during garbage collection.
    *   `expired-overwrite` - The cookie was overwritten with an already-expired expiration date.
*   `removed` Boolean - `true` if the cookie was removed, `false` otherwise.

Emitted when a cookie is changed because it was added, edited, removed, or expired.

### Instance Methods

The following methods are available on instances of `Cookies`:

#### `cookies.get(filter, callback)`

*   `filter` Object
    *   `url` String (optional) - Retrieves cookies which are associated with `url`. Empty implies retrieving cookies of all urls.
    *   `name` String (optional) - Filters cookies by name.
    *   `domain` String (optional) - Retrieves cookies whose domains match or are subdomains of `domains`
    *   `path` String (optional) - Retrieves cookies whose path matches `path`.
    *   `secure` Boolean (optional) - Filters cookies by their Secure property.
    *   `session` Boolean (optional) - Filters out session or persistent cookies.
*   `callback` Function
    *   `error` Error
    *   `cookies` [Cookie[]]({{site.baseurl}}/docs/api/structures/cookie) - an array of cookie objects.

Sends a request to get all cookies matching `details`, `callback` will be called with `callback(error, cookies)` on complete.

#### `cookies.set(details, callback)`

*   `details` Object
    *   `url` String - The url to associate the cookie with.
    *   `name` String (optional) - The name of the cookie. Empty by default if omitted.
    *   `value` String (optional) - The value of the cookie. Empty by default if omitted.
    *   `domain` String (optional) - The domain of the cookie. Empty by default if omitted.
    *   `path` String (optional) - The path of the cookie. Empty by default if omitted.
    *   `secure` Boolean (optional) - Whether the cookie should be marked as Secure. Defaults to false.
    *   `httpOnly` Boolean (optional) - Whether the cookie should be marked as HTTP only. Defaults to false.
    *   `expirationDate` Double (optional) - The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted then the cookie becomes a session cookie and will not be retained between sessions.
*   `callback` Function
    *   `error` Error

Sets a cookie with `details`, `callback` will be called with `callback(error)` on complete.

#### `cookies.remove(url, name, callback)`

*   `url` String - The URL associated with the cookie.
*   `name` String - The name of cookie to remove.
*   `callback` Function

Removes the cookies matching `url` and `name`, `callback` will called with `callback()` on complete.

#### `cookies.flushStore(callback)`

*   `callback` Function

Writes any unwritten cookies data to disk.
