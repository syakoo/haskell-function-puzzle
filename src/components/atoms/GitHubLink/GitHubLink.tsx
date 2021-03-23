import React from 'react'

import styles from './GitHubLink.module.scss'

// ___________
//
const GitHubLink: React.VFC = () => (
  <a
    className={styles.link}
    href="https://github.com/syakoo/haskell-function-puzzle"
  >
    <img src="/img/GitHub.png" />
  </a>
)

export default GitHubLink
