---
version: v1.4.10
category: API
redirect_from:
    - /docs/v0.24.0/api/structures/task/
    - /docs/v0.25.0/api/structures/task/
    - /docs/v0.26.0/api/structures/task/
    - /docs/v0.27.0/api/structures/task/
    - /docs/v0.28.0/api/structures/task/
    - /docs/v0.29.0/api/structures/task/
    - /docs/v0.30.0/api/structures/task/
    - /docs/v0.31.0/api/structures/task/
    - /docs/v0.32.0/api/structures/task/
    - /docs/v0.33.0/api/structures/task/
    - /docs/v0.34.0/api/structures/task/
    - /docs/v0.35.0/api/structures/task/
    - /docs/v0.36.0/api/structures/task/
    - /docs/v0.36.3/api/structures/task/
    - /docs/v0.36.4/api/structures/task/
    - /docs/v0.36.5/api/structures/task/
    - /docs/v0.36.6/api/structures/task/
    - /docs/v0.36.7/api/structures/task/
    - /docs/v0.36.8/api/structures/task/
    - /docs/v0.36.9/api/structures/task/
    - /docs/v0.36.10/api/structures/task/
    - /docs/v0.36.11/api/structures/task/
    - /docs/v0.37.0/api/structures/task/
    - /docs/v0.37.1/api/structures/task/
    - /docs/v0.37.2/api/structures/task/
    - /docs/v0.37.3/api/structures/task/
    - /docs/v0.37.4/api/structures/task/
    - /docs/v0.37.5/api/structures/task/
    - /docs/v0.37.6/api/structures/task/
    - /docs/v0.37.7/api/structures/task/
    - /docs/v0.37.8/api/structures/task/
    - /docs/latest/api/structures/task/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/structures/task.md'
title: "Task Object"
sort_title: "task object"
---

# Task Object

* `program` String - Path of the program to execute, usually you should
  specify `process.execPath` which opens the current program.
* `arguments` String - The command line arguments when `program` is
  executed.
* `title` String - The string to be displayed in a JumpList.
* `description` String - Description of this task.
* `iconPath` String - The absolute path to an icon to be displayed in a
  JumpList, which can be an arbitrary resource file that contains an icon. You
  can usually specify `process.execPath` to show the icon of the program.
* `iconIndex` Number - The icon index in the icon file. If an icon file
  consists of two or more icons, set this value to identify the icon. If an
  icon file consists of one icon, this value is 0.
