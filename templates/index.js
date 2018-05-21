const fs = require('fs')
const path = require('path')

module.exports = {
  app: fs.readFileSync(path.join(__dirname, "app.html"), "utf8"),
  api: fs.readFileSync(path.join(__dirname, "api.html"), "utf8")
};
