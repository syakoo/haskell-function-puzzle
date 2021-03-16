import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { fetchProblemsByLv } from '@/problems'

// ___________
//
type ProblemListProps = {
  level: number
}

// ___________
//
const ProblemList: React.VFC<ProblemListProps> = ({ level }) => {
  const problems = useMemo(() => {
    return fetchProblemsByLv(level)
  }, [level])

  return (
    <div>
      {problems.map((p, i) => (
        <_Link key={i} to={`problem/${level}/${i}`}>
          [{i}]
        </_Link>
      ))}
    </div>
  )
}

// ___________
//
const _Link = styled(Link)`
  margin: 3px 6px;
  color: ${(p) => p.theme.gray};
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.3;
  }
  &:visited {
    color: ${(p) => p.theme.gray2};
  }
`

export default ProblemList
