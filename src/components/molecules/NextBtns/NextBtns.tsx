import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// __________
//
type NextBtnsProps = {
  level: number
  id: number
}

// __________
//
const NextBtns: React.VFC<NextBtnsProps> = ({ level, id }) => {
  return (
    <_Links>
      {id > 0 && <Link to={`/problem/${level}/${id - 1}`}>PREV</Link>}
      <Link to={`/problem/${level}/${id + 1}`}>NEXT</Link>
    </_Links>
  )
}

// __________
//
const _Links = styled.div`
  display: flex;
  justify-content: center;
  a {
    margin: 0px 5px;
    color: ${(p) => p.theme.secondary};
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.3;
    }
  }
`

export default NextBtns
