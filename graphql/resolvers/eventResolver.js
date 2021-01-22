const events = require('../mockData/events')

module.exports = (_, args) => {
  const { id } = args

  return events.find(event => event.id === id) || null
}
