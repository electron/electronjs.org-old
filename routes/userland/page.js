const fs = require('fs')
const path = require('path')

const landingPageContext = {
  devtron: {
    title: 'Devtron | Electron',
    description: 'Devtron is an open source tool to help you inspect, monitor, and debug your Electron app. Built on top of the amazing Chrome Developer Tools.'
  },
  spectron: {
    title: 'Spectron | Electron',
    description: 'Spectron is an open source framework for easily writing integrations tests for your Electron app. Built on top of ChromeDriver and WebDriverIO.'
  }
}

module.exports = (req, res, next) => {
  const routePath = req.path.substr(1)
  if (!landingPageContext[routePath]) return next()
  const landingPagePath = path.resolve(`views/userland/${routePath}.html`)
  if (!fs.existsSync(landingPagePath)) return next()
  req.context.page.title = landingPageContext[routePath].title
  req.context.page.description = landingPageContext[routePath].description
  res.render(`userland/${routePath}`, req.context)
}
