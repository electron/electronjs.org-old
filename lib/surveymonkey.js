//@ts-check

/** @type {import("got").default} */
const got = require('got')

const token = process.env.SM_TOKEN

const surveyMonkey = got.extend({
  prefixUrl: 'https://api.surveymonkey.com/v3/',
  headers: {
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  },
  responseType: 'json',
})

/**
 * Queries SurveyMonkey and returns the survey information
 * @param {string} surveyId
 */
const getSurvey = async (surveyId) => {

  /**
   * The API returns an Array, but there should only be a collector
   * with the name `popup`
   * https://developer.surveymonkey.com/api/v3/#surveys-id-collectors
   */
  const [collectorInformation] = (
    await surveyMonkey(`surveys/${surveyId}/collectors?name=popup`).json()
  ).data

  const collector = await surveyMonkey(
    `collectors/${collectorInformation.id}`
  ).json()

  // Find collectors for dates and such
  return { status: collector.status, embedCode: collector.embed_code }
}

/**
 * @returns {Promise<any[]>}
 */
const getSurveys = async () => {
  /** @type {any[]} */
  const allSurveys = (
    await surveyMonkey
      .get(`surveys?sort_by=date_modified&sort_order=DESC`)
      .json()
  ).data

  const surveys = allSurveys.filter((survey) => {
    return survey.title.includes(`Electron's documentation`)
  })

  return surveys
}

/**
 * Returns the information for the last survey related to Electron's documentation
 */
const getLatestSurvey = async () => {
  const noSurvey = {
    status: 'close',
    embedCode: '<div>Survey not available</div>', // This will show up only in debug mode
  }

  if (!token) {
    return noSurvey
  }

  const surveys = await getSurveys()

  if(surveys.length === 0){
    return noSurvey
  }

  const sortedSurveys = surveys.sort((surveyA, surveyB) => {
    if (surveyA.date_modified < surveyB.date_modified) {
      return -1
    }

    if (surveyA.date_modified > surveyB.date_modified) {
      return 1
    }

    return 0
  })

  const latestSurvey = await getSurvey(sortedSurveys[0].id)

  return latestSurvey
}

module.exports = {
  getLatestSurvey,
}
