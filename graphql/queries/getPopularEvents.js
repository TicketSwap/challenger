import { gql } from '@apollo/client'
import event from '~/graphql/fragments/event'

const getPopularEvents = gql`
  query getPopularEvents($first: Int!) {
    popularEvents(first: $first) {
      ...event
    }
  }

  ${event}
`

export default getPopularEvents
