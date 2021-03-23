import React from 'react'
import { AppProps } from 'next/app'

import { Layout } from '@/components/layouts'

import '../../public/styles.css'

// __________
//
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// __________
//
export default MyApp
