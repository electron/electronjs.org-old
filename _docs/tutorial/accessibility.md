---
version: v1.3.6
category: Tutorial
redirect_from:
    - /docs/v0.24.0/tutorial/accessibility/
    - /docs/v0.25.0/tutorial/accessibility/
    - /docs/v0.26.0/tutorial/accessibility/
    - /docs/v0.27.0/tutorial/accessibility/
    - /docs/v0.28.0/tutorial/accessibility/
    - /docs/v0.29.0/tutorial/accessibility/
    - /docs/v0.30.0/tutorial/accessibility/
    - /docs/v0.31.0/tutorial/accessibility/
    - /docs/v0.32.0/tutorial/accessibility/
    - /docs/v0.33.0/tutorial/accessibility/
    - /docs/v0.34.0/tutorial/accessibility/
    - /docs/v0.35.0/tutorial/accessibility/
    - /docs/v0.36.0/tutorial/accessibility/
    - /docs/v0.36.3/tutorial/accessibility/
    - /docs/v0.36.4/tutorial/accessibility/
    - /docs/v0.36.5/tutorial/accessibility/
    - /docs/v0.36.6/tutorial/accessibility/
    - /docs/v0.36.7/tutorial/accessibility/
    - /docs/v0.36.8/tutorial/accessibility/
    - /docs/v0.36.9/tutorial/accessibility/
    - /docs/v0.36.10/tutorial/accessibility/
    - /docs/v0.36.11/tutorial/accessibility/
    - /docs/v0.37.0/tutorial/accessibility/
    - /docs/v0.37.1/tutorial/accessibility/
    - /docs/v0.37.2/tutorial/accessibility/
    - /docs/v0.37.3/tutorial/accessibility/
    - /docs/v0.37.4/tutorial/accessibility/
    - /docs/v0.37.5/tutorial/accessibility/
    - /docs/v0.37.6/tutorial/accessibility/
    - /docs/v0.37.7/tutorial/accessibility/
    - /docs/v0.37.8/tutorial/accessibility/
    - /docs/latest/tutorial/accessibility/
source_url: 'https://github.com/electron/electron/blob/master/docs/tutorial/accessibility.md'
title: "Accessibility"
sort_title: "accessibility"
---

# Accessibility

Making accessible applications is important and we're happy to introduce new functionality to [Devtron](http://electron.atom.io/devtron) and [Spectron](http://electron.atom.io/spectron) that gives developers the opportunity to make their apps better for everyone.

---

Accessibility concerns in Electron applications are similar to those of websites because they're both ultimately HTML. With Electron apps, however, you can't use the online resources for accessibility audits because your app doesn't have a URL to point the auditor to.

These new features bring those auditing tools to your Electron app. You can choose to add audits to your tests with Spectron or use them within DevTools with Devtron. Read on for a summary of the tools or checkout our [accessibility documentation](http://electron.atom.io/docs/tutorials/accessibility) for more information.

### Spectron

In the testing framework Spectron, you can now audit each window and `<webview>` tag in your application. For example:

```javascript
app.client.auditAccessibility().then(function (audit) {
  if (audit.failed) {
    console.error(audit.message)
  }
})
```

You can read more about this feature in [Spectron's documentation](https://github.com/electron/spectron#accessibility-testing).

### Devtron

In Devtron there is a new accessibility tab which will allow you to audit a page in your app, sort and filter the results.

![devtron screenshot](https://cloud.githubusercontent.com/assets/1305617/17156618/9f9bcd72-533f-11e6-880d-389115f40a2a.png)

Both of these tools are using the [Accessibility Developer Tools](https://github.com/GoogleChrome/accessibility-developer-tools) library built by Google for Chrome. You can learn more about the accessibility audit rules this library uses on that [repository's wiki](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules).

If you know of other great accessibility tools for Electron, add them to the [accessibility documentation](http://electron.atom.io/docs/tutorials/accessibility) with a pull request.
