const express = require('express')
const next = require('next')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const port = 3000
const app = next({ dev: true })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  const apiServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  apiServer.applyMiddleware({ app: server })

  server.all('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    console.log(`Challenger at http://localhost:${port}`)
    console.log(
      `GraphQL playground at http://localhost:${port}${apiServer.graphqlPath}`
    )
  })
})
