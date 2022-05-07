import React from 'react'
import Link from 'next/link'

import styles from './NotFound.module.scss'

// ___________
//
const NotFound: React.VFC = () => (
  <div>
    <div className={styles.errorBody}>
      <div className={styles.errorCode}>404</div>
      <div className={styles.errorMsg}>Not Found</div>
    </div>
    <div className={styles.center}>
      <Link href="/">
        <a className={styles.link}>Homeに戻る</a>
      </Link>
    </div>
  </div>
)

export default NotFound
