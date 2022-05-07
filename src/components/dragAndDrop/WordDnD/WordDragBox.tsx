import React from 'react'

import { useDrag } from 'react-dnd'

import { WORD_DND_ACCEPT_KEY } from './helper'
import styles from './WordDragBox.module.scss'

// ___________
//
type WordChoiceBoxProps = {
  txt: string
}

// ___________
//
const WordChoiceBox: React.VFC<WordChoiceBoxProps> = ({ txt }) => {
  const [, dragRef] = useDrag(() => ({
    type: WORD_DND_ACCEPT_KEY,
    item: { txt },
  }))

  return (
    <div className={styles.block} ref={dragRef}>
      {txt}
    </div>
  )
}

export default React.memo(WordChoiceBox)
