---
version: v1.7.9
permalink: /docs/api/structures/cookie/
category: API
redirect_from:
  - /docs/v0.37.8/api/structures/cookie/
  - /docs/v0.37.7/api/structures/cookie/
  - /docs/v0.37.6/api/structures/cookie/
  - /docs/v0.37.5/api/structures/cookie/
  - /docs/v0.37.4/api/structures/cookie/
  - /docs/v0.37.3/api/structures/cookie/
  - /docs/v0.37.1/api/structures/cookie/
  - /docs/v0.37.0/api/structures/cookie/
  - /docs/v0.36.12/api/structures/cookie/
  - /docs/v0.36.11/api/structures/cookie/
  - /docs/v0.36.10/api/structures/cookie/
  - /docs/v0.36.9/api/structures/cookie/
  - /docs/v0.36.8/api/structures/cookie/
  - /docs/v0.36.7/api/structures/cookie/
  - /docs/v0.36.6/api/structures/cookie/
  - /docs/v0.36.5/api/structures/cookie/
  - /docs/v0.36.4/api/structures/cookie/
  - /docs/v0.36.3/api/structures/cookie/
  - /docs/v0.36.2/api/structures/cookie/
  - /docs/v0.36.0/api/structures/cookie/
  - /docs/v0.35.5/api/structures/cookie/
  - /docs/v0.35.4/api/structures/cookie/
  - /docs/v0.35.3/api/structures/cookie/
  - /docs/v0.35.2/api/structures/cookie/
  - /docs/v0.35.1/api/structures/cookie/
  - /docs/v0.34.4/api/structures/cookie/
  - /docs/v0.34.3/api/structures/cookie/
  - /docs/v0.34.2/api/structures/cookie/
  - /docs/v0.34.1/api/structures/cookie/
  - /docs/v0.34.0/api/structures/cookie/
  - /docs/v0.33.9/api/structures/cookie/
  - /docs/v0.33.8/api/structures/cookie/
  - /docs/v0.33.7/api/structures/cookie/
  - /docs/v0.33.6/api/structures/cookie/
  - /docs/v0.33.4/api/structures/cookie/
  - /docs/v0.33.3/api/structures/cookie/
  - /docs/v0.33.2/api/structures/cookie/
  - /docs/v0.33.1/api/structures/cookie/
  - /docs/v0.33.0/api/structures/cookie/
  - /docs/v0.32.3/api/structures/cookie/
  - /docs/v0.32.2/api/structures/cookie/
  - /docs/v0.31.2/api/structures/cookie/
  - /docs/v0.31.0/api/structures/cookie/
  - /docs/v0.30.4/api/structures/cookie/
  - /docs/v0.29.2/api/structures/cookie/
  - /docs/v0.29.1/api/structures/cookie/
  - /docs/v0.28.3/api/structures/cookie/
  - /docs/v0.28.2/api/structures/cookie/
  - /docs/v0.28.1/api/structures/cookie/
  - /docs/v0.28.0/api/structures/cookie/
  - /docs/v0.27.3/api/structures/cookie/
  - /docs/v0.27.2/api/structures/cookie/
  - /docs/v0.27.1/api/structures/cookie/
  - /docs/v0.27.0/api/structures/cookie/
  - /docs/v0.26.1/api/structures/cookie/
  - /docs/v0.26.0/api/structures/cookie/
  - /docs/v0.25.3/api/structures/cookie/
  - /docs/v0.25.2/api/structures/cookie/
  - /docs/v0.25.1/api/structures/cookie/
  - /docs/v0.25.0/api/structures/cookie/
  - /docs/v0.24.0/api/structures/cookie/
  - /docs/v0.23.0/api/structures/cookie/
  - /docs/v0.22.3/api/structures/cookie/
  - /docs/v0.22.2/api/structures/cookie/
  - /docs/v0.22.1/api/structures/cookie/
  - /docs/v0.21.3/api/structures/cookie/
  - /docs/v0.21.2/api/structures/cookie/
  - /docs/v0.21.1/api/structures/cookie/
  - /docs/v0.21.0/api/structures/cookie/
  - /docs/v0.20.8/api/structures/cookie/
  - /docs/v0.20.7/api/structures/cookie/
  - /docs/v0.20.6/api/structures/cookie/
  - /docs/v0.20.5/api/structures/cookie/
  - /docs/v0.20.4/api/structures/cookie/
  - /docs/v0.20.3/api/structures/cookie/
  - /docs/v0.20.2/api/structures/cookie/
  - /docs/v0.20.1/api/structures/cookie/
  - /docs/v0.20.0/api/structures/cookie/
  - /docs/latest/api/structures/cookie/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/structures/cookie.md'
title: Cookie Object
excerpt: ''
sort_title: cookie
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

    https://github.com/electron/electron/blob/master/docs/api/structures/cookie.md

    Thanks!

-->
# Cookie Object

*   `name` String - The name of the cookie.
*   `value` String - The value of the cookie.
*   `domain` String (optional) - The domain of the cookie.
*   `hostOnly` Boolean (optional) - Whether the cookie is a host-only cookie.
*   `path` String (optional) - The path of the cookie.
*   `secure` Boolean (optional) - Whether the cookie is marked as secure.
*   `httpOnly` Boolean (optional) - Whether the cookie is marked as HTTP only.
*   `session` Boolean (optional) - Whether the cookie is a session cookie or a persistent cookie with an expiration date.
*   `expirationDate` Double (optional) - The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies.
