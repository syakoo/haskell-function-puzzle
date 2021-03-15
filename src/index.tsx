import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { HashRouter, Route } from 'react-router-dom'

import { theme, GlobalStyle } from './style'
import { pages } from './components/pages'

// __________
//
const App: React.FC = () => (
  <HashRouter>
    {pages.map((page) => (
      <Route
        key={page.title}
        path={page.path}
        component={page.component}
        exact={page.exact}
      />
    ))}
  </HashRouter>
)

const Container: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle {...theme} />
    <App />
  </ThemeProvider>
)

ReactDOM.render(<Container />, document.getElementById('root'))
