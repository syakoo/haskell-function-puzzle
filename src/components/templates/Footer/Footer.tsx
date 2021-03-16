import React from 'react'
import styled from 'styled-components'

import { GitHubLink } from '@/components/atoms/GitHubLink'

// ___________
//
const Footer: React.VFC = () => {
  return (
    <_Footer>
      <GitHubLink />
      <div>© 2021 syakoo</div>
    </_Footer>
  )
}

// ___________
//
const _Footer = styled.footer`
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  color: ${(p) => p.theme.gray2};

  &::before {
    content: '';
    display: block;
    max-width: 300px;
    margin: 1rem auto;
    height: 1px;
    background-color: ${(p) => p.theme.gray};
    opacity: 0.2;
  }
`

export default Footer
