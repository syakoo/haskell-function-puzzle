import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styled, { ThemeProvider } from 'styled-components'

import { Header } from '@/components/templates/Header'
import { Footer } from '@/components/templates/Footer'

import { theme, GlobalStyle } from './style'

// ___________
//
export const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle {...theme} />
    <Header />
    <DndProvider backend={HTML5Backend}>
      <_Main>{children}</_Main>
    </DndProvider>
    <Footer />
  </ThemeProvider>
)

// ___________
//
const _Main = styled.main`
  margin: 1rem auto;
  max-width: 1000px;
`
