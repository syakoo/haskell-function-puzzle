import React from 'react'

import { ProblemView } from '@/components/problem/ProblemView'
import { MyDndProvider } from '@/components/dragAndDrop/MyDndProvider'
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
