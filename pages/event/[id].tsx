import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import { H2, H5, Image, Text } from '@ticketswap/solar'
import { useQuery } from '@apollo/client'
import { GET_EVENT } from '~/graphql/queries/getEvent'
import { GetServerSideProps } from 'next'

type EventPageProps = {
  eventId: number
}

const Event = ({ eventId }: EventPageProps) => {
  const { data, loading } = useQuery(GET_EVENT, {
    variables: {
      id: parseInt(eventId),
    },
  })

  if (loading || !data?.event) return null

  const { name, date, location, imageUrl, description } = data.event

  return (
    <>
      <Cover />

      <Container>
        <Image src={imageUrl} width={128} />
        <H2>{name}</H2>
        <H5>{new Date(date).toLocaleString()}</H5>
        <H5>{location}</H5>
        <Text>{description}</Text>
      </Container>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      eventId: params!.id,
    },
  }
}

export default Event
