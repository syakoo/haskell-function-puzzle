import React, { useState, Fragment, useEffect } from 'react'

import { DropBox } from '@/components/organisms/DropBox'

import styles from './AnswerSheet.module.scss'

// ___________
//
type AnswerSheetProps = {
  collectAnswer: string[]
  sheet: string[]
}

const replaceAll = (text: string, from: string, to: string) => {
  return text.split(from).join(to)
}

// ___________
//
const AnswerSheet: React.VFC<AnswerSheetProps> = ({ collectAnswer, sheet }) => {
  const [ans, setAnswer] = useState<string[]>(
    Array.from({ length: collectAnswer.length }, () => '')
  )
  const [isCollect, setIsCollect] = useState<boolean | null>(null)

  useEffect(() => {
    setAnswer(Array.from({ length: collectAnswer.length }, () => ''))
  }, [collectAnswer])

  useEffect(() => {
    if (!ans.every((a) => !!a)) {
      setIsCollect(null)
      return
    }

    if (ans.every((a, i) => a === collectAnswer[i])) {
      setIsCollect(true)
    } else {
      setIsCollect(false)
    }
  }, [ans, collectAnswer])

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
      <div className={styles.resultBox}>
        {isCollect ? (
          <div className={styles.collect}>Collect</div>
        ) : isCollect === false ? (
          <div className={styles.wrong}>Wrong</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default React.memo(AnswerSheet)
