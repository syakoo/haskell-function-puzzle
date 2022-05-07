import React from 'react'

import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'

import styles from './Layout.module.scss'

// ___________
//
export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
