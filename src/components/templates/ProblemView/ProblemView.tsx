import React, { useState } from 'react'

import { MappingView } from '@/components/molecules/MappingView'
import { NextBtns } from '@/components/molecules/NextBtns'
import { Choice } from '@/components/organisms/Choice'
import { AnswerSheet } from '@/components/organisms/AnswerSheet'
import { ModalCollect } from '@/components/organisms/ModalCollect'

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
  const [isCollect, setIsCollect] = useState<null | boolean>(null)

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
        collectAnswer={problem.collectAnswer}
        sheet={problem.sheet}
        setIsCollect={setIsCollect}
      />
      <div className={styles.choices}>
        {problem.choices.map((txt) => (
          <div className={styles.space} key={txt}>
            <Choice txt={txt} />
          </div>
        ))}
      </div>
      <div className={styles.marginTop}>
        <NextBtns level={problem.level} id={problem.id} />
      </div>
      <ModalCollect problem={problem} isCollect={isCollect || false} />
    </section>
  )
}

export default React.memo(ProblemView)
