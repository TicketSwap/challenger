import { gql } from '@apollo/client'
import event from '~/graphql/fragments/event'

const getEvent = gql`
  query getEvent($id: Int!) {
    event(id: $id) {
      ...event
    }
  }

  ${event}
`

export default getEvent
