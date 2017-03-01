---
version: v1.6.2
permalink: /docs/api/structures/remove-password/
category: API
source_url: >-
  https://github.com/electron/electron/blob/master/docs/api/structures/remove-password.md
title: RemovePassword Object
excerpt: ''
sort_title: remove-password
---
# RemovePassword Object

*   `type` String - `password`.
*   `origin` String (optional) - When provided, the authentication info related to the origin will only be removed otherwise the entire cache will be cleared.
*   `scheme` String (optional) - Scheme of the authentication. Can be `basic`, `digest`, `ntlm`, `negotiate`. Must be provided if removing by `origin`.
*   `realm` String (optional) - Realm of the authentication. Must be provided if removing by `origin`.
*   `username` String (optional) - Credentials of the authentication. Must be provided if removing by `origin`.
*   `password` String (optional) - Credentials of the authentication. Must be provided if removing by `origin`.
