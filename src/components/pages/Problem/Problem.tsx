import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { ProblemView } from '@/components/templates/ProblemView'
import { NotFound } from '@/components/templates/NotFound'
import { fetchProblem } from '@/problems'

// ___________
//
const ProblemPage: React.VFC<
  RouteComponentProps<{ id: string; lv: string }>
> = ({ match }) => {
  const { id, lv } = match.params
  const problem = fetchProblem(+lv, +id)
  return (
    <div>
      {problem && <ProblemView problem={problem} />}
      {!problem && <NotFound />}
    </div>
  )
}

// ___________
//
export default ProblemPage
