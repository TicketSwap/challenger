import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import { H2, H5, Image, Text } from '@ticketswap/solar'
import { useQuery } from '@apollo/client'
import getEvent from '~/graphql/queries/getEvent'

const Event = ({ eventId }) => {
  const { data, loading } = useQuery(getEvent, {
    variables: {
      id: parseInt(eventId),
    },
  })

  if (loading || !data.event) return null

  const { name, date, location, imageUrl, description } = data.event

  return (
    <>
      <Cover />

      <Container>
        <Image src={imageUrl} size={128} />
        <H2>{name}</H2>
        <H5>{new Date(date).toLocaleString()}</H5>
        <H5>{location}</H5>
        <Text>{description}</Text>
      </Container>

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
