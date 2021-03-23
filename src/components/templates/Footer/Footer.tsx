import React from 'react'

import { GitHubLink } from '@/components/atoms/GitHubLink'

import styles from './Footer.module.scss'

// ___________
//
const Footer: React.VFC = () => {
  return (
    <footer className={styles.footer}>
      <GitHubLink />
      <div>© 2021 syakoo</div>
    </footer>
  )
}

// ___________
//
export default Footer
