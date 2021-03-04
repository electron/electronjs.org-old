//@ts-check

/**
 * @typedef Survey
 * @prop {string} id
 * @prop {string} title
 * @prop {'open'|'close'} status
 * @prop {string} embedCode
 * @prop {Date} dateCreated
 * @prop {string} collectorId
 */

/**
 * @typedef ButtonInfo
 * @prop {string} bg_color
 * @prop {string} text_color
 * @prop {string} text
 */

/**
 * @typedef CollectorOptions
 * @prop {'open'|'close'} status
 * @prop {Date} close_date
 * @prop {number} response_limit
 * @prop {number} height
 * @prop {number} width
 */

/**
 * Waits for the given milliseconds
 * @param {number} timeout
 * @returns {Promise}
 */
const waitFor = (timeout) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

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
  hooks: {
    afterResponse: [async (response) => {
      // Sometimes the SM API doesn't fully create the resources
      // if we do operations with them too fast so we delay 😑
      await waitFor(2000)
      return response
    }]
  }
})

/**
 * Queries SurveyMonkey and returns the survey information
 * @param {string} surveyId
 * @returns {Promise<Survey>}
 */
const getSurvey = async (surveyId) => {
  const survey = (await surveyMonkey(`surveys/${surveyId}`).json())

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

  return {
    status: collector.status,
    title: survey.title,
    embedCode: collector.embed_code,
    dateCreated: new Date(survey.date_created),
    id: survey.id,
    collectorId: collectorInformation.id,
  }
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
 * @returns {Promise<Survey>}
 */
const getLatestSurvey = async () => {
  /** @type Survey */
  const noSurvey = {
    status: 'close',
    title: 'No survey',
    embedCode: '<div>Survey not available</div>', // This will show up only in debug mode
    dateCreated: new Date(),
    id: '-1',
    collectorId: '-1',
  }

  if (!token) {
    return noSurvey
  }

  const surveys = await getSurveys()

  if (surveys.length === 0) {
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

/**
 * Creates a new survey using the survey ID as a reference
 * @param {string} surveyId
 * @param {string} title
 * @returns {Promise<any>}
 */
const createNewSurvey = async (surveyId, title) => {
  const { body } = await surveyMonkey.post('surveys', {
    json: { from_survey_id: surveyId, title },
  })

  return body
}

/**
 * Closes the given collector
 * @param {string} collectorId
 * @returns {Promise<any>}
 */
const closeCollector = async (collectorId) => {
  const { body } = await surveyMonkey.patch(`collectors/${collectorId}`, {
    json: {
      status: 'closed',
    },
  })

  return body
}

/**
 * Creates a new collector named `collectorName` for the given survey
 * @param {string} surveyId
 * @param {string} collectorId
 * @param {CollectorOptions} options
 * @returns {Promise<any>}
 */
const createCollector = async (surveyId, collectorId, options) => {

  /** @type {any} */
  const { body } = await surveyMonkey.post(`surveys/${surveyId}/collectors`, {
    json: { from_collector_id: collectorId }
  })

  const { body: collectorBody } = await surveyMonkey.patch(`collectors/${body.id}`, {
    json: options
  })

  return collectorBody
}

module.exports = {
  getLatestSurvey,
  createNewSurvey,
  closeCollector,
  createCollector,
}
