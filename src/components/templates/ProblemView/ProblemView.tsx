import React from 'react'
import styled from 'styled-components'

import { MappingView } from '@/components/molecules/MappingView'

// __________
//
type Problem = {
  level: number
  id: number
  createdAt: string
  env: string
  map: { from: string; to: string }
  preCode?: string
  f: string
  choices: string[]
  answer: string[]
}

const sampleProblem: Problem = {
  level: 1,
  id: 0,
  createdAt: '2021/03/15',
  env: 'GHC 8.6.5',
  map: { from: '[1, 2, 3]', to: '[4, 5, 6]' },
  f: '■ ■',
  choices: ['map', '(+1)', '(-1)'],
  answer: ['map', '(+1)'],
}

// __________
//
const ProblemView: React.VFC = () => {
  const problem = sampleProblem

  return (
    <div>
      <_Head>
        <div>
          <_Date>{problem.createdAt}</_Date>
          <div>
            Problem {problem.level}-{problem.id}
          </div>
        </div>
        <div>version: {problem.env}</div>
      </_Head>
      <div>
        <_Body>
          <MappingView from={problem.map.from} to={problem.map.to} />
        </_Body>
        <div>f = {problem.f}</div>
      </div>
      <div></div>
    </div>
  )
}

// __________
//
const _Head = styled.div`
  display: flex;
  justify-content: space-between;
`

const _Body = styled.div`
  padding: 4rem 0px;
`

const _Date = styled.div`
  font-size: small;
  color: ${(p) => p.theme.gray2};
`

export default ProblemView
