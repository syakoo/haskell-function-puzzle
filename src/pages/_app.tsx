import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { Layout } from '@/components/layouts'
import { pageViewEvent } from '@/utils/ga'

import '../../public/styles.css'

// __________
//
const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', pageViewEvent)
    return () => {
      router.events.off('routeChangeComplete', pageViewEvent)
    }
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// __________
//
export default MyApp
