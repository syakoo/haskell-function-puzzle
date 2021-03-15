import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Header } from '@/components/templates/Header'

import { theme, GlobalStyle } from './style'

// ___________
//
export const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle {...theme} />
    <Header />
    <_Main>{children}</_Main>
  </ThemeProvider>
)

// ___________
//
const _Main = styled.main`
  margin: 1rem auto;
  max-width: 1000px;
`
