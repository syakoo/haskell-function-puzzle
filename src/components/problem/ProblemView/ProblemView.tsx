import React, { useState } from 'react'

import { MappingView } from '@/components/problem/MappingView'
import { NextBtns } from '@/components/problem/NextBtns'
import { WordDragBox } from '@/components/dragAndDrop/WordDnD'
import { AnswerSheet } from '@/components/problem/AnswerSheet'
import { ModalCorrect } from '@/components/problem/ModalCorrect'

import type { Problem } from '@/types'

import styles from './ProblemView.module.scss'

// __________
//
type ProblemViewProps = {
  problem: Problem
}

// __________
//
const ProblemView: React.VFC<ProblemViewProps> = ({ problem }) => {
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null)

  return (
    <section key={`${problem.level}${problem.id}`}>
      <div className={styles.head}>
        <div>
          {problem.level}-{problem.id}
          <span className={styles.title}>{problem.title}</span>
        </div>
        <div className={styles.version}>version: {problem.env}</div>
      </div>
      <div className={styles.body}>
        <MappingView from={problem.map.from} to={problem.map.to} />
      </div>
      <AnswerSheet
        correctAnswer={problem.correctAnswer}
        sheet={problem.sheet}
        setIsCorrect={setIsCorrect}
      />
      <div className={styles.choices}>
        {problem.choices.map((txt) => (
          <div className={styles.space} key={txt}>
            <WordDragBox txt={txt} />
          </div>
        ))}
      </div>
      <div className={styles.marginTop}>
        <NextBtns level={problem.level} id={problem.id} />
      </div>
      <ModalCorrect problem={problem} isCorrect={isCorrect || false} />
    </section>
  )
}

export default React.memo(ProblemView)
