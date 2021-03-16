import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// ___________
//
const NotFound: React.VFC = () => (
  <div>
    <_ErrorBody>
      <_ErrorCode>404</_ErrorCode>
      <_ErrorMsg>Not Found</_ErrorMsg>
    </_ErrorBody>
    <_Center>
      <_Link to="/">Homeに戻る</_Link>
    </_Center>
  </div>
)

// ___________
//
const _ErrorBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 2rem 0px;
`

const _ErrorCode = styled.div`
  margin-right: 2rem;
  font-size: 8rem;
  color: ${(p) => p.theme.secondary};
`

const _ErrorMsg = styled.div`
  font-size: 3rem;
  color: ${(p) => p.theme.gray2};
`

const _Link = styled(Link)`
  display: inline-block;
  margin: auto;
  color: ${(p) => p.theme.secondary};
`

const _Center = styled.div`
  text-align: center;
`

export default NotFound
