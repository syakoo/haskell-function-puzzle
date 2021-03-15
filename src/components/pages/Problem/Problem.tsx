import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

// ___________
//
const ProblemPage: React.VFC<
  RouteComponentProps<{ id: string; lv: string }>
> = ({ match }) => {
  const { id, lv } = match.params
  return (
    <div>
      Problem Page, Level : {lv}, Problem Id : {id}
    </div>
  )
}

// ___________
//
export default ProblemPage
