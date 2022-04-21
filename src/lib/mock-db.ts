import { getEvents } from "./mock-data"

export const database = {
  getPopularEvents: async (amount: number, offset: number) => {
    const events = await getEvents()

    return events
      .toSorted((a, b) => b.alerts - a.alerts)
      .slice(offset, amount + offset)
  },
  getEvent: async (id: number) => {
    const events = await getEvents()

    return events.find((event) => event.id === id) ?? null
  },
}
