---
version: v0.29.0
category: Tutorial
title: 'Using Pepper Flash Plugin Ko'
source_url: 'https://github.com/atom/electron/blob/master/docs/tutorial/using-pepper-flash-plugin-ko.md'
---

# Pepper �÷��� �÷����� �����ϱ�

�ʿ��ϴٸ� Pepper �÷��� �÷������� ������ �� �ֽ��ϴ�. Electron���� pepper �÷��� �÷������� �����ϱ� ���ؼ���, ���� pepper �÷��� �÷������� ��ġ�� ������ �־����մϴ�.

## �÷��� �÷����� �غ��ϱ�

ũ�� ���������� `chrome://plugins` �������� ������ �� `��������`���� �÷��� �÷������� ��ġ�� ������ ã�� �� �ֽ��ϴ�.
Electron���� �÷��� �÷������� �����ϱ� ���ؼ� �� �� ������ ������ �;� �մϴ�.

## Electron ����ġ �߰�

�÷������� �����ϱ� ���� ���������� `--ppapi-flash-path` �� `ppapi-flash-version` �÷��׸� ready �̺�Ʈ�� ȣ���Ǳ� ���� �߰��ؾ��մϴ�.
�׸��� `browser-window`�� `plugins` ����ġ�� �߰��ؾ��մϴ�.

```javascript
var app = require('app');
var BrowserWindow = require('browser-window');

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// �÷��� �÷������� ��ġ�� �����մϴ�.
// Windows�� ����, /path/to/pepflashplayer.dll
// Mac�� ����, /path/to/PepperFlashPlayer.plugin
// Linux�� ����, /path/to/libpepflashplayer.so
app.commandLine.appendSwitch('ppapi-flash-path', '/path/to/libpepflashplayer.so');

// Specify flash version, for example, v17.0.0.169
app.commandLine.appendSwitch('ppapi-flash-version', '17.0.0.169');

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 800,
    'height': 600,
    'web-preferences': {
      'plugins': true
    }
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  // Something else
});
```

## `<webview>` �±׸� �̿��Ͽ� �÷������� Ȱ��ȭ
`plugins` �Ӽ��� `<webview>` �±׿� �߰��մϴ�.
```html
<webview src="http://www.adobe.com/software/flash/about/" plugins></webview>
```
