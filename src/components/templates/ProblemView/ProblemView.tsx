import React from 'react'
import styled from 'styled-components'

import { MappingView } from '@/components/molecules/MappingView'
import { NextBtns } from '@/components/molecules/NextBtns'
import { Choice } from '@/components/organisms/Choice'
import { AnswerSheet } from '@/components/organisms/AnswerSheet'

import type { Problem } from '@/types'

// __________
//
type ProblemViewProps = {
  problem: Problem
}

// __________
//
const ProblemView: React.VFC<ProblemViewProps> = ({ problem }) => {
  return (
    <div>
      <_Head>
        <div>
          <div>
            Problem {problem.level}-{problem.id}
          </div>
        </div>
        <div>version: {problem.env}</div>
      </_Head>
      <_Body>
        <MappingView from={problem.map.from} to={problem.map.to} />
      </_Body>
      <AnswerSheet
        collectAnswer={problem.collectAnswer}
        sheet={problem.sheet}
      />
      <_Choices>
        {problem.choices.map((txt) => (
          <_Space key={txt}>
            <Choice txt={txt} />
          </_Space>
        ))}
      </_Choices>
      <_MarginTop>
        <NextBtns level={problem.level} id={problem.id} />
      </_MarginTop>
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

const _Choices = styled.div`
  display: flex;
  justify-content: center;
`

const _Space = styled.div`
  margin: 0.5rem;
`

const _MarginTop = styled.div`
  margin-top: 5rem;
`

export default ProblemView
