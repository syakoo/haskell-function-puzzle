import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { HomePage } from './Home'

// ___________
//
type Page = {
  title: string
  path: string
  exact: boolean
  component: React.FC<RouteComponentProps<{ [k: string]: string }>>
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
]
