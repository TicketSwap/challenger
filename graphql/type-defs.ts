import { gql } from '@apollo/client'

export const typeDefs = gql`
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
