import React, { useState, Fragment, useEffect } from 'react'

import { DropBox } from '@/components/organisms/DropBox'

import styles from './AnswerSheet.module.scss'

// ___________
//
type AnswerSheetProps = {
  correctAnswer: string[]
  sheet: string[]
  setIsCorrect: (isCorrect: null | boolean) => void
}

const replaceAll = (text: string, from: string, to: string) => {
  return text.split(from).join(to)
}

// ___________
//
const AnswerSheet: React.VFC<AnswerSheetProps> = ({
  correctAnswer,
  sheet,
  setIsCorrect,
}) => {
  const [ans, setAnswer] = useState<string[]>(
    Array.from({ length: correctAnswer.length }, () => '')
  )

  useEffect(() => {
    setAnswer(Array.from({ length: correctAnswer.length }, () => ''))
  }, [correctAnswer])

  useEffect(() => {
    if (!ans.every((a) => !!a)) {
      setIsCorrect(null)
      return
    }

    if (ans.every((a, i) => a === correctAnswer[i])) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }, [ans, correctAnswer])

  return (
    <div className={styles.answerSheet}>
      <div className={styles.answerSheetInner}>
        {sheet.map((r, j) => (
          <div className={styles.sheetRow} key={j}>
            {replaceAll(r, ' ', '\u00A0')
              .split('■')
              .map((s, i) => (
                <Fragment key={`${i}${s}`}>
                  <div>{s}</div>
                  {i < r.split('■').length - 1 && (
                    <DropBox
                      ans={ans[i]}
                      setAns={(a) =>
                        setAnswer((pre) => {
                          pre[i] = a
                          return [...pre]
                        })
                      }
                    />
                  )}
                </Fragment>
              ))}
          </div>
        ))}
      </div>
      <div className={styles.resultBox}></div>
    </div>
  )
}

export default React.memo(AnswerSheet)
