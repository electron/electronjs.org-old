//@ts-check
const surveyMonkey = require('../../lib/surveymonkey')
const oneDay = 24 * 3600 * 1000
const fourteenDays = oneDay * 14
/*
  Because cron does not allow to say "every other Monday" we have to manually
  check all Mondays if there is something to do or not looking at the creation
  date. Most of the times it should be a Monday at midnight, but the first one
  might have been created at a different moment (e.g. Tuesday) so we cannot
  check for 14 days exactly. We use 1 week + 1 day instead
*/
const maxDaysRunning = 8

/** @type {import('../../lib/surveymonkey').CollectorOptions} */
const collectorOptions = {
    status: 'open',
    close_date: new Date(Date.now() + fourteenDays), // Today + 14 days
    response_limit: 400,
    height: 300,
    width: 500,
}

/**
 * Checks if the survey has been opened for 2 weeks or more and creates a new one
 * @param {import('../../lib/surveymonkey').Survey} survey
 */
const shouldCreateNewOne = (survey) => {
    const days = Math.floor((survey.dateCreated.getTime() - Date.now()) / oneDay)

    return days >= maxDaysRunning
}


const start = async () => {
    const lastSurvey = await surveyMonkey.getLatestSurvey()

    if (lastSurvey.id === '-1' || !shouldCreateNewOne(lastSurvey)) {
        console.log(`No need to create new survey. Last survey info:`)
        console.log(lastSurvey)

        return
    }

    // TODO: Update grafana with satisfaction score and NPS data?

    const title = `${lastSurvey.title.split('-')[0]} - ${new Date().toLocaleDateString()}`
    const newSurvey = await surveyMonkey.createNewSurvey(lastSurvey.id, title)
    console.log(`Survey "${title}" created`)

    await surveyMonkey.closeCollector(lastSurvey.collectorId)

    const newCollector = await surveyMonkey.createCollector(newSurvey.id, lastSurvey.collectorId, collectorOptions)
    console.log(`Collector ${newCollector.id} associated to ${newSurvey.id}`)

    console.log(newCollector)
}

start()
