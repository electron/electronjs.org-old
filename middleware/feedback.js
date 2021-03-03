//@ts-check

/**
 * Middleware that checks if the feedback CTA needs to be displayed or not
 * and adds the right properties to the context to be consumed by partials.
 */

const surveyMonkey = require('../lib/surveymonkey')

/** How long the user will not be bothered with the feedback CTA (90 days) */
const cookieExpiration = 90 * 24 * 3600 * 1000
const cookieName = 'feedbackCTA'
const cookieValue = 'true'

/** Refresh status every 15 minutes */
const freshnessTimeout = 15 * 60 * 1000

let surveyLastRefreshed = -1
let cachedSurvey

const getLastSurveyInformation = async () => {
  const isFresh = Date.now() - surveyLastRefreshed < freshnessTimeout

  if (!cachedSurvey || !isFresh) {
    cachedSurvey = await surveyMonkey.getLatestSurvey()
    surveyLastRefreshed = Date.now()
  }

  return cachedSurvey
}

/**
 * Checks if the current survey is opened
 * @returns {Boolean}
 */
const isSurveyOpen = (survey) => {
  // Even though the doc say it's only "open" or "close", it can also be "new" 😒
  return survey.status !== 'close'
}

/**
 * Checks if the user has been shown the CTA previously
 * @param {any} cookies
 * @returns {Boolean}
 */
const userIsNotTainted = (cookies) => {
  return !(cookies[cookieName] && cookies[cookieName] === cookieValue)
}

/**
 * Randomly selects 8% of the users
 * @returns {Boolean}
 */
const shouldShowCTAToUser = () => {
  return Math.random() <= 0.08
}

/**
 * Returns a JSON object telling if the CTA needs to be shown or not,
 * and updating the cookie status so the client knows to now show it.
 *
 * Even though SM has a way to define the % of visitors that will see
 * the pop up for a survey, it is only limited to that particular one.
 * We want to make sure users are not bothered for 3 months and if we
 * have a new one every 2 weeks that is not possible.
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
module.exports = async (req, res, next) => {
  const lastSurvey = await getLastSurveyInformation()
  const criteria = [
    isSurveyOpen(lastSurvey),
    userIsNotTainted(req.cookies),
    shouldShowCTAToUser(),
  ]

  const validatesCriteria = criteria.every((check) => check)
  const debugging = req.query.debug === 'true'

  if (validatesCriteria || debugging) {
    // The context object is manually passed to HBS when rendering
    // The associated partial (/views/partials/feedback.hbs) will
    // use these variables to decide what and when to render
    const context = {
      showFeedback: true,
      feedbackEmbedCode: lastSurvey.embedCode,
      // Bypass the popup limitation of showing only once per session: https://stackoverflow.com/a/55789538
      // The cookie will clear only if debugging is done in the first page where the cookie was set
      debugging,
    }

    req.context = Object.assign(req.context, context)

    // Set only the do-not-bother-me-for-a-while cookie if we are not debugging
    if (!debugging) {
      res.cookie(cookieName, cookieValue, {
        maxAge: cookieExpiration,
      })
    }
  }

  next()
}
