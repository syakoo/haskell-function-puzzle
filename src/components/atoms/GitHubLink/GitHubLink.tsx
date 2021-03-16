import React from 'react'
import styled from 'styled-components'

import Logo from './GitHub.png'

// ___________
//
const GitHubLink: React.VFC = () => (
  <_Link href="https://github.com/syakoo/haskell-function-puzzle">
    <img src={Logo} />
  </_Link>
)

// ___________
//
const _Link = styled.a`
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
`

export default GitHubLink
