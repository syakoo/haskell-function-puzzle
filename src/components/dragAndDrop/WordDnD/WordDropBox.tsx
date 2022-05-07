import React from 'react'
import { useDrop } from 'react-dnd'

import styles from './WordDropBox.module.scss'
import { WORD_DND_ACCEPT_KEY } from './helper'

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
    accept: WORD_DND_ACCEPT_KEY,
    drop: (item: { txt: string }) => {
      setAns(item.txt)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  return (
    <div
      ref={dropRef}
      className={styles.dropBox}
      data-is-over={isOver}
      data-is-dropped={!!ans}
    >
      {ans}
    </div>
  )
}

export default React.memo(DropBox)
