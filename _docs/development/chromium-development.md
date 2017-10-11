---
version: v1.7.9
permalink: /docs/development/chromium-development/
category: Development
redirect_from:
  - /docs/v0.37.8/development/chromium-development/
  - /docs/v0.37.7/development/chromium-development/
  - /docs/v0.37.6/development/chromium-development/
  - /docs/v0.37.5/development/chromium-development/
  - /docs/v0.37.4/development/chromium-development/
  - /docs/v0.37.3/development/chromium-development/
  - /docs/v0.37.1/development/chromium-development/
  - /docs/v0.37.0/development/chromium-development/
  - /docs/v0.36.12/development/chromium-development/
  - /docs/v0.36.11/development/chromium-development/
  - /docs/v0.36.10/development/chromium-development/
  - /docs/v0.36.9/development/chromium-development/
  - /docs/v0.36.8/development/chromium-development/
  - /docs/v0.36.7/development/chromium-development/
  - /docs/v0.36.6/development/chromium-development/
  - /docs/v0.36.5/development/chromium-development/
  - /docs/v0.36.4/development/chromium-development/
  - /docs/v0.36.3/development/chromium-development/
  - /docs/v0.36.2/development/chromium-development/
  - /docs/v0.36.0/development/chromium-development/
  - /docs/v0.35.5/development/chromium-development/
  - /docs/v0.35.4/development/chromium-development/
  - /docs/v0.35.3/development/chromium-development/
  - /docs/v0.35.2/development/chromium-development/
  - /docs/v0.35.1/development/chromium-development/
  - /docs/v0.34.4/development/chromium-development/
  - /docs/v0.34.3/development/chromium-development/
  - /docs/v0.34.2/development/chromium-development/
  - /docs/v0.34.1/development/chromium-development/
  - /docs/v0.34.0/development/chromium-development/
  - /docs/v0.33.9/development/chromium-development/
  - /docs/v0.33.8/development/chromium-development/
  - /docs/v0.33.7/development/chromium-development/
  - /docs/v0.33.6/development/chromium-development/
  - /docs/v0.33.4/development/chromium-development/
  - /docs/v0.33.3/development/chromium-development/
  - /docs/v0.33.2/development/chromium-development/
  - /docs/v0.33.1/development/chromium-development/
  - /docs/v0.33.0/development/chromium-development/
  - /docs/v0.32.3/development/chromium-development/
  - /docs/v0.32.2/development/chromium-development/
  - /docs/v0.31.2/development/chromium-development/
  - /docs/v0.31.0/development/chromium-development/
  - /docs/v0.30.4/development/chromium-development/
  - /docs/v0.29.2/development/chromium-development/
  - /docs/v0.29.1/development/chromium-development/
  - /docs/v0.28.3/development/chromium-development/
  - /docs/v0.28.2/development/chromium-development/
  - /docs/v0.28.1/development/chromium-development/
  - /docs/v0.28.0/development/chromium-development/
  - /docs/v0.27.3/development/chromium-development/
  - /docs/v0.27.2/development/chromium-development/
  - /docs/v0.27.1/development/chromium-development/
  - /docs/v0.27.0/development/chromium-development/
  - /docs/v0.26.1/development/chromium-development/
  - /docs/v0.26.0/development/chromium-development/
  - /docs/v0.25.3/development/chromium-development/
  - /docs/v0.25.2/development/chromium-development/
  - /docs/v0.25.1/development/chromium-development/
  - /docs/v0.25.0/development/chromium-development/
  - /docs/v0.24.0/development/chromium-development/
  - /docs/v0.23.0/development/chromium-development/
  - /docs/v0.22.3/development/chromium-development/
  - /docs/v0.22.2/development/chromium-development/
  - /docs/v0.22.1/development/chromium-development/
  - /docs/v0.21.3/development/chromium-development/
  - /docs/v0.21.2/development/chromium-development/
  - /docs/v0.21.1/development/chromium-development/
  - /docs/v0.21.0/development/chromium-development/
  - /docs/v0.20.8/development/chromium-development/
  - /docs/v0.20.7/development/chromium-development/
  - /docs/v0.20.6/development/chromium-development/
  - /docs/v0.20.5/development/chromium-development/
  - /docs/v0.20.4/development/chromium-development/
  - /docs/v0.20.3/development/chromium-development/
  - /docs/v0.20.2/development/chromium-development/
  - /docs/v0.20.1/development/chromium-development/
  - /docs/v0.20.0/development/chromium-development/
  - /docs/latest/development/chromium-development/
source_url: >-
  https://github.com/electron/electron/blob/master/docs/development/chromium-development.md
title: Chromium Development
excerpt: >-
  A collection of resources for learning about Chromium and tracking its
  development
sort_title: chromium-development
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

    https://github.com/electron/electron/blob/master/docs/development/chromium-development.md

    Thanks!

-->
# Chromium Development

> A collection of resources for learning about Chromium and tracking its development

*   [chromiumdev](https://chromiumdev-slack.herokuapp.com) on Slack
*   [@ChromiumDev](https://twitter.com/ChromiumDev) on Twitter
*   [@googlechrome](https://twitter.com/googlechrome) on Twitter
*   [Blog](https://blog.chromium.org)
*   [Code Search](https://cs.chromium.org/)
*   [Source Code](https://cs.chromium.org/chromium/src/)
*   [Development Calendar and Release Info](https://www.chromium.org/developers/calendar)
*   [Discussion Groups](http://www.chromium.org/developers/discussion-groups)

See also [V8 Development]({{site.baseurl}}/docs/development/v8-development)
