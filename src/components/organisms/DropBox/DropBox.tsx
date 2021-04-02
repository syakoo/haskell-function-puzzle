import React from 'react'
import { useDrop } from 'react-dnd'

import styles from './DropBox.module.scss'

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
    <div
      ref={dropRef}
      className={styles.dropBox}
      data-isover={isOver}
      data-isdropped={!!ans}
    >
      {ans}
    </div>
  )
}

export default React.memo(DropBox)
