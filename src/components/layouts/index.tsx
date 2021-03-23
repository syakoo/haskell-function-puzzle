import React from 'react'

import { Header } from '@/components/templates/Header'
import { Footer } from '@/components/templates/Footer'

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
