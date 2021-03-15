import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyle } from './style'

// ___________
//
export const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle {...theme} />
    <main>{children}</main>
  </ThemeProvider>
)
