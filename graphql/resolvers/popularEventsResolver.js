const events = require('../mockData/events')

module.exports = (_, args) => {
  const { first } = args

  return events.slice(0, first)
}
