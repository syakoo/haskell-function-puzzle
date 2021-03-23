import React from 'react'

import { ProblemView } from '@/components/templates/ProblemView'
import { MyDndProvider } from '@/components/templates/MyDndProvider'
import { Problem } from '@/types'

// ___________
//
type ProblemPageProps = {
  problem: Problem
}

// ___________
//
const ProblemPage: React.VFC<ProblemPageProps> = ({ problem }) => {
  return (
    <MyDndProvider>
      <ProblemView problem={problem} />
    </MyDndProvider>
  )
}

// ___________
//
export default ProblemPage
