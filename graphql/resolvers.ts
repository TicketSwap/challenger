import { events } from './mock-data'

export const resolvers = {
  Query: {
    popularEvents(
      _parent: any,
      args: { first: number },
      _context: any,
      _info: any
    ) {
      const { first } = args

      return events.slice(0, first)
    },
    event(_parent: any, args: { id: number }, _context: any, _info: any) {
      const { id } = args

      return events.find(event => event.id === id) || null
    },
  },
}
