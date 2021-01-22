import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import { H2, H5, Image, radius, color, space } from '@ticketswap/solar'
import { useQuery } from '@apollo/client'
import getEvent from '~/graphql/queries/getEvent'
import styled from '@emotion/styled'

const Wrapper = styled(Container)`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: auto 1fr;
`

const EventImage = styled(Image)`
  border-radius: ${radius.lg};
  width: ${space[256]};
`

const Info = styled.div``

const Meta = styled(H5)`
  color: ${color.spaceMedium};
`

const Event = ({ eventId }) => {
  const { data, loading } = useQuery(getEvent, {
    variables: {
      id: parseInt(eventId),
    },
  })

  if (loading || !data.event) return null

  const { name, date, location, imageUrl } = data.event

  return (
    <>
      <Cover />

      <Wrapper>
        <EventImage src={imageUrl} size={128} />
        <Info>
          <H2>{name}</H2>
          <Meta>{new Date(date).toLocaleString()}</Meta>
          <Meta>{location}</Meta>
        </Info>
      </Wrapper>

      <Footer />
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  return {
    props: {
      eventId: params.id,
    },
  }
}

export default Event
