import React, { useMemo } from 'react'

import { Modal } from '@/components/organisms/Modal'
import { TextLink } from '@/components/atoms/TextLink'
import { Check } from '@/components/atoms/Icons'
import type { Problem } from '@/types'

import styles from './ModalCollect.module.scss'

// __________
//
type ModalCollectProps = {
  problem: Problem
  isCollect: boolean
}

// __________
//
const ModalCollect: React.VFC<Pick<ModalCollectProps, 'problem'>> = ({
  problem,
}) => {
  const collectAnswer = useMemo(() => {
    const sheet = problem.sheet
    const anss = problem.collectAnswer
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
          Collect
        </div>
        <div className={styles.main}>
          <div className={styles.answer}>
            {collectAnswer.map((ans, i) => (
              <div className={styles.answerRow} key={`${i}:${ans}`}>
                {ans}
              </div>
            ))}
          </div>
          <div>ああああああああああああ</div>
        </div>
        <div className={styles.foot}>
          <button>tweet</button>
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
const Container: React.VFC<ModalCollectProps> = ({ problem, isCollect }) => (
  <>{isCollect && <ModalCollect problem={problem} />}</>
)

export default Container
