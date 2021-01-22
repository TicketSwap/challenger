import { gql } from '@apollo/client'

const event = gql`
  fragment event on Event {
    id
    name
    date
    location
    imageUrl
  }
`

export default event
