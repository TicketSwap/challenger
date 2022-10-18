import { ApolloServer } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import { schema } from '~/graphql/schema'

export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({
  schema,
})

const startServer = apolloServer.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}
