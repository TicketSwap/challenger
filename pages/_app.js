import React from 'react'
import Head from 'next/head'
import BaseStyles from '~/styles/global'

export default function App({ Component, pageProps }) {
  return (
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <BaseStyles />

      <Component {...pageProps} />
  )
}
