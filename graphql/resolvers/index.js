const popularEvents = require('../resolvers/popularEventsResolver')
const event = require('../resolvers/eventResolver')

module.exports = {
  Query: {
    popularEvents,
    event,
  },
}
