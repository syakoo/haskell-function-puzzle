import React from 'react'
import styled from 'styled-components'

// ___________
//
const Header: React.VFC = () => {
  return (
    <_Header>
      <_Title>Haskell Function Puzzle</_Title>
    </_Header>
  )
}

// ___________
//
const _Header = styled.header`
  text-align: center;
  padding: 1rem;
`

const _Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

export default Header
