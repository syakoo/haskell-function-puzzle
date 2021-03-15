import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Header } from '@/components/templates/Header'

import { theme, GlobalStyle } from './style'

// ___________
//
export const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle {...theme} />
    <Header />
    <main>{children}</main>
  </ThemeProvider>
)
