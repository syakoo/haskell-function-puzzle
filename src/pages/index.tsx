import React from 'react'
import { NextPage } from 'next'

import { Home } from '@/components/pages/Home'
import { Metas } from '@/components/ui/Metas'

// __________
//
const TopPage: NextPage = () => {
  return (
    <>
      <Metas />
      <Home />
    </>
  )
}

// __________
//
export default TopPage
