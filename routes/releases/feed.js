module.exports = (req, res) => {
  let releases = req.context.releases

  res.json(releases)
}
