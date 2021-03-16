import React from 'react'
import { useDrop } from 'react-dnd'
import styled from 'styled-components'

// ___________
//
type DropBoxProps = {
  ans: string
  setAns: (ans: string) => void
}

// ___________
//
const DropBox: React.VFC<DropBoxProps> = ({ ans, setAns }) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'CHOICE',
    drop: (item: { txt: string }) => {
      setAns(item.txt)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  return (
    <_DropBox ref={dropRef} isDropped={!!ans} isOver={isOver}>
      {ans}
    </_DropBox>
  )
}

// ___________
//
const _DropBox = styled.div<{ isDropped: boolean; isOver: boolean }>`
  display: inline-block;
  text-align: center;
  font-size: 1.5rem;
  padding: 3px;
  min-width: 3rem;
  min-height: 2rem;
  border: 1px solid ${(p) => (p.isOver ? p.theme.secondary : p.theme.gray2)};
  border-radius: 5px;
  background-color: ${(p) => (p.isDropped ? p.theme.gray : p.theme.gray3)};
`

export default DropBox
