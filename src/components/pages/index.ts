import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { HomePage } from './Home'
import { ProblemPage } from './Problem'

// ___________
//
type Page = {
  title: string
  path: string
  exact: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<RouteComponentProps<any>>
}

// ___________
//
export const pages: Page[] = [
  {
    title: 'HOME',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    title: 'PROBLEM',
    path: '/problem/:lv/:id',
    exact: true,
    component: ProblemPage,
  },
]
