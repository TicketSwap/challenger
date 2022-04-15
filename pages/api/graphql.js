import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'
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

export default async function handler(req, res) {
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}
