---
version: v1.6.2
permalink: /docs/api/structures/upload-data/
category: API
source_url: >-
  https://github.com/electron/electron/blob/master/docs/api/structures/upload-data.md
title: UploadData Object
excerpt: ''
sort_title: upload-data
---
# UploadData Object

*   `bytes` Buffer - Content being sent.
*   `file` String - Path of file being uploaded.
*   `blobUUID` String - UUID of blob data. Use [ses.getBlobData]({{site.baseurl}}/docs/api/session#sesgetblobdataidentifier-callback) method to retrieve the data.
