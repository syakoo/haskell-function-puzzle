import React from 'react'
import Link from 'next/link'

import styles from './NextBtns.module.scss'

// __________
//
type NextBtnsProps = {
  level: number
  id: number
}

// __________
//
const NextBtns: React.VFC<NextBtnsProps> = ({ level, id }) => {
  return (
    <div className={styles.links}>
      {id > 0 && (
        <Link href={`/problem/${level}/${id - 1}`}>
          <a>PREV</a>
        </Link>
      )}
      <Link href={`/problem/${level}/${id + 1}`}>
        <a>NEXT</a>
      </Link>
    </div>
  )
}

export default NextBtns
