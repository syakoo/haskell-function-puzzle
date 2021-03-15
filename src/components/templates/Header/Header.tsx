import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// ___________
//
const Header: React.VFC = () => {
  return (
    <_Header>
      <_Title to="/">Haskell Function Puzzle</_Title>
    </_Header>
  )
}

// ___________
//
const _Header = styled.header`
  text-align: center;
  padding: 1rem;
`

const _Title = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: ${(p) => p.theme.white};
  text-decoration: none;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.6);
  }
`

export default Header
