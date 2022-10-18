import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '~/graphql/client'
import BaseStyles from '~/styles/global'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <BaseStyles />

      <Component {...pageProps} />
    </ApolloProvider>
  )
}