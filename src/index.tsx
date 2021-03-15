import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import { pages } from './components/pages'
import { Layout } from './components/layouts'

// __________
//
const App: React.FC = () => (
  <HashRouter>
    <Layout>
      {pages.map((page) => (
        <Route
          key={page.title}
          path={page.path}
          component={page.component}
          exact={page.exact}
        />
      ))}
    </Layout>
  </HashRouter>
)

const Container: React.FC = () => <App />

ReactDOM.render(<Container />, document.getElementById('root'))
