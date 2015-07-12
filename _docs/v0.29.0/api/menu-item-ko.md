---
version: v0.29.0
category: API
title: 'Menu Item Ko'
source_url: 'https://github.com/atom/electron/blob/master/docs/api/menu-item-ko.md'
---

# menu-item

## Class: MenuItem

### new MenuItem(options)

* `options` Object
  * `click` Function - �޴� �������� Ŭ���� �� ȣ���Ǵ� �ݹ��Լ�
  * `selector` String - First Responder�� Ŭ���� �� ȣ�� �Ǵ� ������ (OS X ����)
  * `type` String - `MenuItem`�� Ÿ�� `normal`, `separator`, `submenu`, `checkbox` �Ǵ� `radio` ���밡��
  * `label` String
  * `sublabel` String
  * `accelerator` [Accelerator](http://electron.atom.io/docs/v0.29.0/api/accelerator)
  * `icon` [NativeImage](http://electron.atom.io/docs/v0.29.0/api/native-image)
  * `enabled` Boolean
  * `visible` Boolean
  * `checked` Boolean
  * `submenu` Menu - �����޴��� �����մϴ�. `type`�� `submenu`�� ���� �ݵ��� �����ؾ��մϴ�. �Ϲ� �޴� �������� ���� ������ �� �ֽ��ϴ�.     
  * `id` String - ���� �޴� �����ۿ� ���� ����Ű�� �����մϴ�. �� Ű�� ���� `position` �ɼǿ��� ������ �� �ֽ��ϴ�.
  * `position` String - �̸� ������ `id`�� �̿��Ͽ� �޴� �������� ��ġ�� �����ϰ� �����մϴ�.
