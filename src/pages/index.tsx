import React from 'react'
import { NextPage } from 'next'

import { Home } from '@/components/pages/Home'
import { Meta } from '@/components/common/Meta'

// __________
//
const TopPage: NextPage = () => {
  return (
    <>
      <Meta />
      <Home />
    </>
  )
}

// __________
//
export default TopPage
