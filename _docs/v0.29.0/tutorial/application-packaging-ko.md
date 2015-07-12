---
version: v0.29.0
category: Tutorial
title: 'Application Packaging Ko'
source_url: 'https://github.com/atom/electron/blob/master/docs/tutorial/application-packaging-ko.md'
---

# ���ø����̼� ��Ű¡

���ø����̼��� ���ҽ��� �ҽ��ڵ带 �����κ��� ��ȣ�ϱ� ����, �ణ�� ���� �������� ���ø����̼��� [asar][asar] ��ī�̺��� ��Ű¡ �� �� �ֽ��ϴ�.

## `asar` ��ī�̺� ����

[asar][asar]��ī�̺��� tar�� ������ �������� ���� ���ҽ��� �ϳ��� ���Ϸ� �����ϴ�.
�׸��� Electron�� �������� ���� ���Ƿ� ���� ������ �о����� �� �ֽ��ϴ�.

���� ��� �ܰ踦 ���� ���ø����̼��� `asar` ��ī�̺��� ������ �� �ֽ��ϴ�:

### 1. asar ��ƿ��Ƽ ��ġ

```bash
$ npm install -g asar
```

### 2. `asar pack` Ŀ�ǵ��� �� ��Ű¡

```bash
$ asar pack your-app app.asar
```

## `asar` ��ī�̺� �����ϱ�

Electron�� �ΰ����� API�� ������ �ֽ��ϴ�: Node.js�� ���� ������ Node API, Chromium���κ��� ������ Web API.
�� API ���� `asar`���� �о����� �� �ֵ��� �����մϴ�.

### Node API

`fs.readFile` �� `require` ���� Node API���� �����ϱ� ���� Electron���� `asar` ��ī�̺갡 ������ �����͸� ������ ���򵵷�
��ġ�߽��ϴ�. �׷��� ��ī�̺� ���ο��� ���ҽ����� �������� ���� �ý���ó�� ������ �� �ֽ��ϴ�.

��������, `/path/to`���� ���ο� `example.asar`���� ��ī�̺갡 �ִٰ� �����ϸ�:

```bash
$ asar list /path/to/example.asar
/app.js
/file.txt
/dir/module.js
/static/index.html
/static/main.css
/static/jquery.min.js
```

`asar` ��ī�̺꿡�� ������ ���� ������ ���� �� �ֽ��ϴ�:

```javascript
var fs = require('fs');
fs.readFileSync('/path/to/example.asar/file.txt');
```

��ī�̺� ���� ��Ʈ �����͸��� �������մϴ�:

```javascript
var fs = require('fs');
fs.readdirSync('/path/to/example.asar');
```

��ī�̺� ���� ���� �����ϱ�:

```javascript
require('/path/to/example.asar/dir/module.js');
```

`BrowserWindow` Ŭ������ �̿��� ���ϴ� �� �������� ǥ���� �� �ֽ��ϴ�:

```javascript
var BrowserWindow = require('browser-window');
var win = new BrowserWindow({width: 800, height: 600});
win.loadUrl('file:///path/to/example.asar/static/index.html');
```

### Web API

�� ������ ������, ��ī�̺� ���� ������ `file:` ���������� �����Ͽ� ��û�� �� �ֽ��ϴ�.
�� ���� Node API�� ���� ���� �����͸� ������ �����ϴ�.

��������, jQuery�� `$.get`�� �����Ͽ� ������ ������ �� �ֽ��ϴ�:

```html
<script>
var $ = require('./jquery.min.js');
$.get('file:///path/to/example.asar/file.txt', function(data) {
  console.log(data);
});
</script>
```

### `asar` ��ī�̺긦 �Ϲ� ���Ϸ� �����ϱ�

`asar` ��ī�̺��� üũ��(checksum)���� �˻��ϱ� ���ؼ�, `asar` ��ī�̺긦 ���� �״��� �о��鿩�� �� �ʿ䰡 �ֽ��ϴ�.
�� �۾��� �ϱ� ���� `original-fs`���� �ϴ� ��Ʈ�� ������ `fs` ���� ���ſ� ������ �� �ֽ��ϴ�.
�� ������ `asar` ������ �����ֽ��ϴ�. �� ���� �״��θ� �о����Դϴ�: 

```javascript
var originalFs = require('original-fs');
originalFs.readFileSync('/path/to/example.asar');
```

## Node API�� �Ѱ�

`asar` ��ī�̺긦 Node API�� �ִ��� �����͸� ������ �۵��ϵ��� �����ؿ�����, ������ ������(low-level) Node API ������ �Ѱ谡 �ֽ��ϴ�.

Even though we tried hard to make `asar` archives in the Node API work like
directories as much as possible, there are still limitations due to the
low-level nature of the Node API.

### ��ī�̺��� �б� �����Դϴ�

��ī�̺��� ������ �� ������ �⺻�����δ� Node API�� ������ ������ �� ������, `asar` ��ī�̺꿡�� �۵����� �ʽ��ϴ�.

### ��ī�̺� ���� �����͸��� �۾� ���η� �����ϸ� �ȵ˴ϴ�

`asar` ��ī�̺��� �����͸�ó�� ������ �� �ֵ��� �����Ǿ�����, �װ��� ���� ���Ͻý����� �����͸��� �ƴ� ������ �����͸��Դϴ�.
�׷� ������ ���� API���� �����ϴ� `cwd` �ɼ��� `asar` ��ī�̺� ���� �����͸� ���η� �����ϸ� ���߿� ������ �߻��� �� �ֽ��ϴ�.

### Ư�� API�� ���� �������� ���� ����

���� `fs` API�� `asar` ��ī�̺��� ������ �������� �ʰ� �ٷ� ��ī�̺긦 �аų� ������ ������ �� ������, 
���� API�� �ý����� ���� ������ ���θ� �������� �۵��ϹǷ� �� API���� ������ �� Electron��
�� API�� �����ϰ� �۵��� �� �ֵ��� �ϱ� ���� �ӽð��ο� �ش� ���ϵ��� ������ �����մϴ�. �� �۾��� �ణ�� �������带 �ҷ� ����ų �� �ֽ��ϴ�.

�ش��ϴ� API �Լ��� ������ �����ϴ�:

* `child_process.execFile`
* `fs.open`
* `fs.openSync`
* `process.dlopen` - Used by `require` on native modules

### `fs.stat`�� �߸��� �������ͽ�

`fs.stat` �� ���� ��ȯ�Ǵ� `Stats` ��ü�� ������ API���� `asar` ��ī�̺긦 Ÿ������ �� ���� ������ ������ ������ �����ϴ�.
�ֳ��ϸ� ��ī�̺��� �����͸� ���δ� ���� ���Ͻý��ۿ� �������� �ʱ� �����Դϴ�.
�׷��� ������ ���� ũ���� ���� Ÿ�� ���� Ȯ���� �� `Stats` ��ü�� �ŷ��ؼ� �ȵ˴ϴ�.

## Adding unpacked files in `asar` archive

������ �ٿ� ����, ���� Node API�� ȣ�� �� �ش� ������ �ӽ������� ������ �����մϴ�.
���� ���ɹ����� �߻��� �� �ֽ��ϴ�. �׸��� ���� ����Ʈ������ �߸��� ������ ����ų ���� �ֽ��ϴ�.

�� ������ �ذ��Ϸ���, `--unpack` �ɼ��� Ȱ���Ͽ� ������ ������ Ǯ���� ���·� �����ؾ� �մϴ�.
������ ������ node ����Ƽ�� ������ ���� ���̺귯���� unpack ���·� �����մϴ�:

```bash
$ asar pack app app.asar --unpack *.node
```

Ŀ�ǵ带 ������ ��, ���� �����͸��� `app.asar` ���� �ܿ� `app.asar.unpacked` ������ ���� �����˴ϴ�.
�� �����ȿ� unpack �ɼǿ��� ������ ���ϵ��� ������ Ǯ�� ���·� ���ԵǾ� �ֽ��ϴ�.
�������� ���ø����̼��� ������ �� �ݵ��� �ش� ������ ���� �����Ͽ����մϴ�.

[asar]: https://github.com/atom/asar
