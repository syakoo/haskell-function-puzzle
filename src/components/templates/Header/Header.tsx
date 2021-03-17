import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// ___________
//
const Header: React.VFC = () => {
  return (
    <_Header>
      <_Title to="/">
        Haskell Function <_Secondary>Puzzle</_Secondary>
      </_Title>
    </_Header>
  )
}

// ___________
//
const _Header = styled.header`
  padding: 1rem;
  max-width: 1000px;
  margin: auto;
`

const _Title = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(p) => p.theme.gray};
  text-decoration: none;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.6);
  }
`

const _Secondary = styled.span`
  color: ${(p) => p.theme.secondary};
`

export default Header
