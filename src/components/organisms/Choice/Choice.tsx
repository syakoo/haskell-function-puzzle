import React from 'react'

import { useDrag } from 'react-dnd'

import styles from './Choice.module.scss'

// ___________
//
type ChoiceProps = {
  txt: string
}

// ___________
//
const Choice: React.VFC<ChoiceProps> = ({ txt }) => {
  const [, dragRef] = useDrag(() => ({
    type: 'CHOICE',
    item: { txt },
  }))

  return (
    <div className={styles.block} ref={dragRef}>
      {txt}
    </div>
  )
}

export default React.memo(Choice)
