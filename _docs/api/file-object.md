---
version: v1.3.6
category: API
redirect_from:
    - /docs/v0.24.0/api/file-object/
    - /docs/v0.25.0/api/file-object/
    - /docs/v0.26.0/api/file-object/
    - /docs/v0.27.0/api/file-object/
    - /docs/v0.28.0/api/file-object/
    - /docs/v0.29.0/api/file-object/
    - /docs/v0.30.0/api/file-object/
    - /docs/v0.31.0/api/file-object/
    - /docs/v0.32.0/api/file-object/
    - /docs/v0.33.0/api/file-object/
    - /docs/v0.34.0/api/file-object/
    - /docs/v0.35.0/api/file-object/
    - /docs/v0.36.0/api/file-object/
    - /docs/v0.36.3/api/file-object/
    - /docs/v0.36.4/api/file-object/
    - /docs/v0.36.5/api/file-object/
    - /docs/v0.36.6/api/file-object/
    - /docs/v0.36.7/api/file-object/
    - /docs/v0.36.8/api/file-object/
    - /docs/v0.36.9/api/file-object/
    - /docs/v0.36.10/api/file-object/
    - /docs/v0.36.11/api/file-object/
    - /docs/v0.37.0/api/file-object/
    - /docs/v0.37.1/api/file-object/
    - /docs/v0.37.2/api/file-object/
    - /docs/v0.37.3/api/file-object/
    - /docs/v0.37.4/api/file-object/
    - /docs/v0.37.5/api/file-object/
    - /docs/v0.37.6/api/file-object/
    - /docs/v0.37.7/api/file-object/
    - /docs/v0.37.8/api/file-object/
    - /docs/latest/api/file-object/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/file-object.md'
excerpt: "Use the HTML5 <code>File</code> API to work natively with files on the filesystem."
title: "File Object"
sort_title: "file object"
---

# `File` Object

> Use the HTML5 `File` API to work natively with files on the filesystem.

The DOM's File interface provides abstraction around native files in order to
let users work on native files directly with the HTML5 file API. Electron has
added a `path` attribute to the `File` interface which exposes the file's real
path on filesystem.

Example on getting a real path from a dragged-onto-the-app file:

```html
<div id="holder">
  Drag your file here
</div>

<script>
  const holder = document.getElementById('holder')
  holder.ondragover = () => {
    return false;
  }
  holder.ondragleave = holder.ondragend = () => {
    return false;
  }
  holder.ondrop = (e) => {
    e.preventDefault()
    for (let f of e.dataTransfer.files) {
      console.log('File(s) you dragged here: ', f.path)
    }
    return false;
  }
</script>
```
