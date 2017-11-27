const got = require('got')

module.exports = async (req, res) => {
  if (!process.env.CROWDIN_KEY) {
    return res.json('process.env.CROWDIN_KEY is not set')
  }

  const url = `https://api.crowdin.com/api/project/electron/status?key=${process.env.CROWDIN_KEY}&json=true`
  try {
    const data = await(got(url, {json: true}))
    res.json(data.body)
  } catch (err) {
    console.error(err)
    return res.json('Failed to fetch Crowdin stats')
  }
}