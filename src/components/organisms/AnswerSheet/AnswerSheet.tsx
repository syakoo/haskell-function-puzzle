import React, { useState, Fragment, useEffect } from 'react'
import styled from 'styled-components'

import { DropBox } from '@/components/organisms/DropBox'

// ___________
//
type AnswerSheetProps = {
  collectAnswer: string[]
  f: string
}

// ___________
//
const AnswerSheet: React.VFC<AnswerSheetProps> = ({ collectAnswer, f }) => {
  const [ans, setAnswer] = useState<string[]>(
    Array.from({ length: collectAnswer.length }, () => '')
  )
  const [isCollect, setIsCollect] = useState<boolean | null>(null)

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
    <_AnswerSheet>
      <_AnswerSheetInner>
        {f
          .replaceAll(' ', '\u00A0')
          .split('■')
          .map((s, i) => (
            <Fragment key={`${i}${s}`}>
              <div>{s}</div>
              {i < collectAnswer.length && (
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
      </_AnswerSheetInner>
      <_ResultBox>
        {isCollect ? (
          <_Collect>Collect</_Collect>
        ) : isCollect === false ? (
          <_Wrong>Wrong</_Wrong>
        ) : (
          <></>
        )}
      </_ResultBox>
    </_AnswerSheet>
  )
}

// ___________
//
const _AnswerSheet = styled.div`
  padding: 1rem 0px;
`

const _AnswerSheetInner = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  font-size: 2rem;
`

const _ResultBox = styled.div`
  height: 3rem;
  text-align: center;
`

const _Collect = styled.div`
  color: ${(p) => p.theme.green};
`

const _Wrong = styled.div`
  color: ${(p) => p.theme.red};
`

export default AnswerSheet
