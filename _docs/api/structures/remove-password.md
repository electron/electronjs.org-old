---
version: v1.4.12
category: API
redirect_from:
    - /docs/v0.24.0/api/structures/remove-password/
    - /docs/v0.25.0/api/structures/remove-password/
    - /docs/v0.26.0/api/structures/remove-password/
    - /docs/v0.27.0/api/structures/remove-password/
    - /docs/v0.28.0/api/structures/remove-password/
    - /docs/v0.29.0/api/structures/remove-password/
    - /docs/v0.30.0/api/structures/remove-password/
    - /docs/v0.31.0/api/structures/remove-password/
    - /docs/v0.32.0/api/structures/remove-password/
    - /docs/v0.33.0/api/structures/remove-password/
    - /docs/v0.34.0/api/structures/remove-password/
    - /docs/v0.35.0/api/structures/remove-password/
    - /docs/v0.36.0/api/structures/remove-password/
    - /docs/v0.36.3/api/structures/remove-password/
    - /docs/v0.36.4/api/structures/remove-password/
    - /docs/v0.36.5/api/structures/remove-password/
    - /docs/v0.36.6/api/structures/remove-password/
    - /docs/v0.36.7/api/structures/remove-password/
    - /docs/v0.36.8/api/structures/remove-password/
    - /docs/v0.36.9/api/structures/remove-password/
    - /docs/v0.36.10/api/structures/remove-password/
    - /docs/v0.36.11/api/structures/remove-password/
    - /docs/v0.37.0/api/structures/remove-password/
    - /docs/v0.37.1/api/structures/remove-password/
    - /docs/v0.37.2/api/structures/remove-password/
    - /docs/v0.37.3/api/structures/remove-password/
    - /docs/v0.37.4/api/structures/remove-password/
    - /docs/v0.37.5/api/structures/remove-password/
    - /docs/v0.37.6/api/structures/remove-password/
    - /docs/v0.37.7/api/structures/remove-password/
    - /docs/v0.37.8/api/structures/remove-password/
    - /docs/latest/api/structures/remove-password/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/structures/remove-password.md'
title: "RemovePassword Object"
sort_title: "removepassword object"
---

# RemovePassword Object

* `type` String - `password`.
* `origin` String (optional) - When provided, the authentication info
  related to the origin will only be removed otherwise the entire cache
  will be cleared.
* `scheme` String (optional) - Scheme of the authentication.
  Can be `basic`, `digest`, `ntlm`, `negotiate`. Must be provided if
  removing by `origin`.
* `realm` String (optional) - Realm of the authentication. Must be provided if
  removing by `origin`.
* `username` String (optional) - Credentials of the authentication. Must be
  provided if removing by `origin`.
* `password` String (optional) - Credentials of the authentication. Must be
  provided if removing by `origin`.
