import React, { useState, Fragment, useEffect } from 'react'
import styled from 'styled-components'

import { DropBox } from '@/components/organisms/DropBox'

// ___________
//
type AnswerSheetProps = {
  collectAnswer: string[]
  sheet: string[]
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
    <_AnswerSheet>
      <_AnswerSheetInner>
        {sheet.map((r, j) => (
          <_SheetRow key={j}>
            {r
              .replaceAll(' ', '\u00A0')
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
          </_SheetRow>
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
  margin: auto;
  max-width: 600px;
  padding: 1rem;
  font-size: 2rem;
  background-color: ${(p) => p.theme.gray};
  border-radius: 5px;
  color: ${(p) => p.theme.black};
`

const _SheetRow = styled.div`
  display: flex;
  height: 3rem;
  width: 400px;
`

const _ResultBox = styled.div`
  margin-top: 5px;
  height: 3rem;
  text-align: center;
`

const _Collect = styled.div`
  color: ${(p) => p.theme.green};
`

const _Wrong = styled.div`
  color: ${(p) => p.theme.red};
`

export default React.memo(AnswerSheet)
