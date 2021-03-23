import React from 'react'
import Link from 'next/link'

import styles from './Header.module.scss'

// ___________
//
const Header: React.VFC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>
          Haskell Function <span className={styles.secondary}>Puzzle</span>
        </a>
      </Link>
    </header>
  )
}

// ___________
//
export default React.memo(Header)
