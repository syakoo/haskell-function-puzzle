import React, { useMemo } from 'react'

import { Modal } from '@/components/organisms/Modal'
import { TextLink } from '@/components/atoms/TextLink'
import { Check } from '@/components/atoms/Icons'
import { TwitterShareBtn } from '@/components/atoms/TwitterShareBtn'
import type { Problem } from '@/types'

import styles from './ModalCorrect.module.scss'

// __________
//
type ModalCorrectProps = {
  problem: Problem
  isCorrect: boolean
}

// __________
//
const ModalCorrect: React.VFC<Pick<ModalCorrectProps, 'problem'>> = ({
  problem,
}) => {
  const correctAnswer = useMemo(() => {
    const sheet = problem.sheet
    const anss = problem.correctAnswer
    let i = 0
    return sheet.map((row) => {
      return row.split('■').reduce((prev, curr, idx) => {
        if (idx === 0) return prev + curr
        return [prev, curr].join(anss[i++])
      }, '')
    })
  }, [problem])

  return (
    <Modal
      handleClose={() => {
        return
      }}
    >
      <div className={styles.body}>
        <div className={styles.head}>
          <div className={styles.check}>
            <Check strokeWidth={3} />
          </div>
          Correct
        </div>
        <div className={styles.main}>
          <div className={styles.answer}>
            {correctAnswer.map((ans, i) => (
              <div className={styles.answerRow} key={`${i}:${ans}`}>
                {ans}
              </div>
            ))}
          </div>
          <div>{problem.comment}</div>
        </div>
        <div className={styles.foot}>
          <TwitterShareBtn
            text={`問題${problem.level}-${problem.id} に正解しました！`}
          />
          <div className={styles.links}>
            <TextLink href="/">HOME</TextLink>
            <TextLink href={`/problem/${problem.level}/${problem.id + 1}`}>
              NEXT
            </TextLink>
          </div>
        </div>
      </div>
    </Modal>
  )
}

// __________
//
const Container: React.VFC<ModalCorrectProps> = ({ problem, isCorrect }) => (
  <>{isCorrect && <ModalCorrect problem={problem} />}</>
)

export default Container
