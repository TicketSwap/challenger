import React from 'react'
import { useQuery } from '@apollo/client'
import { Card, space, Spinner } from '@ticketswap/solar'
import styled from '@emotion/styled'
import getPopularEvents from '~/graphql/queries/getPopularEvents'
import Link from 'next/link'

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${space[16]};
  grid-template-columns: repeat(2, 1fr);
`

const PopularEvents = () => {
  const { loading, data } = useQuery(getPopularEvents, {
    variables: {
      first: 6,
    },
  })

  if (loading) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    )
  }

  const { popularEvents } = data

  return (
    <Wrapper>
      {popularEvents.map(({ id, name, location, date, imageUrl }) => (
        <Link href={`/event/${id}`} passHref>
          <a>
            <Card
              title={name}
              subtitle={`${location} - ${new Date(date).toLocaleDateString()}`}
              image={imageUrl}
            />
          </a>
        </Link>
      ))}
    </Wrapper>
  )
}

export default PopularEvents
