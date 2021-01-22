const { gql } = require('apollo-server-express')

module.exports = gql`
  type Event {
    id: Int!
    name: String!
    date: String!
    location: String
    description: String
    imageUrl: String!
  }
  type Query {
    popularEvents(first: Int!): [Event!]!
    event(id: Int!): Event
  }
`
