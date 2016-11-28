---
version: v1.4.10
category: API
redirect_from:
    - /docs/v0.24.0/api/structures/cookie/
    - /docs/v0.25.0/api/structures/cookie/
    - /docs/v0.26.0/api/structures/cookie/
    - /docs/v0.27.0/api/structures/cookie/
    - /docs/v0.28.0/api/structures/cookie/
    - /docs/v0.29.0/api/structures/cookie/
    - /docs/v0.30.0/api/structures/cookie/
    - /docs/v0.31.0/api/structures/cookie/
    - /docs/v0.32.0/api/structures/cookie/
    - /docs/v0.33.0/api/structures/cookie/
    - /docs/v0.34.0/api/structures/cookie/
    - /docs/v0.35.0/api/structures/cookie/
    - /docs/v0.36.0/api/structures/cookie/
    - /docs/v0.36.3/api/structures/cookie/
    - /docs/v0.36.4/api/structures/cookie/
    - /docs/v0.36.5/api/structures/cookie/
    - /docs/v0.36.6/api/structures/cookie/
    - /docs/v0.36.7/api/structures/cookie/
    - /docs/v0.36.8/api/structures/cookie/
    - /docs/v0.36.9/api/structures/cookie/
    - /docs/v0.36.10/api/structures/cookie/
    - /docs/v0.36.11/api/structures/cookie/
    - /docs/v0.37.0/api/structures/cookie/
    - /docs/v0.37.1/api/structures/cookie/
    - /docs/v0.37.2/api/structures/cookie/
    - /docs/v0.37.3/api/structures/cookie/
    - /docs/v0.37.4/api/structures/cookie/
    - /docs/v0.37.5/api/structures/cookie/
    - /docs/v0.37.6/api/structures/cookie/
    - /docs/v0.37.7/api/structures/cookie/
    - /docs/v0.37.8/api/structures/cookie/
    - /docs/latest/api/structures/cookie/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/structures/cookie.md'
title: "Cookie Object"
sort_title: "cookie object"
---

# Cookie Object

* `name` String - The name of the cookie.
* `value` String - The value of the cookie.
* `domain` String - The domain of the cookie.
* `hostOnly` String - Whether the cookie is a host-only cookie.
* `path` String - The path of the cookie.
* `secure` Boolean - Whether the cookie is marked as secure.
* `httpOnly` Boolean - Whether the cookie is marked as HTTP only.
* `session` Boolean - Whether the cookie is a session cookie or a persistent
  cookie with an expiration date.
* `expirationDate` Double (optional) - The expiration date of the cookie as
  the number of seconds since the UNIX epoch. Not provided for session
  cookies.
