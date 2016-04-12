---
version: v0.37.5
category: API
title: 'Power Monitor'
redirect-from:
    - /docs/v0.24.0/api/power-monitor/
    - /docs/v0.25.0/api/power-monitor/
    - /docs/v0.26.0/api/power-monitor/
    - /docs/v0.27.0/api/power-monitor/
    - /docs/v0.28.0/api/power-monitor/
    - /docs/v0.29.0/api/power-monitor/
    - /docs/v0.30.0/api/power-monitor/
    - /docs/v0.31.0/api/power-monitor/
    - /docs/v0.32.0/api/power-monitor/
    - /docs/v0.33.0/api/power-monitor/
    - /docs/v0.34.0/api/power-monitor/
    - /docs/v0.35.0/api/power-monitor/
    - /docs/v0.36.0/api/power-monitor/
    - /docs/v0.36.3/api/power-monitor/
    - /docs/v0.36.4/api/power-monitor/
    - /docs/v0.36.5/api/power-monitor/
    - /docs/v0.36.6/api/power-monitor/
    - /docs/v0.36.7/api/power-monitor/
    - /docs/v0.36.8/api/power-monitor/
    - /docs/v0.36.9/api/power-monitor/
    - /docs/v0.36.10/api/power-monitor/
    - /docs/v0.36.11/api/power-monitor/
    - /docs/v0.37.0/api/power-monitor/
    - /docs/v0.37.1/api/power-monitor/
    - /docs/v0.37.2/api/power-monitor/
    - /docs/v0.37.5/api/power-monitor/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/power-monitor.md'
---

# powerMonitor

The `power-monitor` module is used to monitor power state changes. You can
only use it in the main process. You should not use this module until the `ready`
event of the `app` module is emitted.

For example:

```javascript
app.on('ready', function() {
  require('electron').powerMonitor.on('suspend', function() {
    console.log('The system is going to sleep');
  });
});
```

## Events

The `power-monitor` module emits the following events:

### Event: 'suspend'

Emitted when the system is suspending.

### Event: 'resume'

Emitted when system is resuming.

### Event: 'on-ac' _Windows_

Emitted when the system changes to AC power.

### Event: 'on-battery' _Windows_

Emitted when system changes to battery power.
