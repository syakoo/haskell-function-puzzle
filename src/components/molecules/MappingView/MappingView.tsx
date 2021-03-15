import React from 'react'
import styled from 'styled-components'

import { Arrow } from '@/components/atoms/Icons'

// ___________
//
type MappingViewProps = {
  from: string
  to: string
}

// ___________
//
const MappingView: React.VFC<MappingViewProps> = ({ from, to }) => {
  return (
    <_MappingView>
      <_FlexCenter>
        <div>{from}</div>
        <_ArrowDiv>
          <Arrow />
        </_ArrowDiv>
        <div>{to}</div>
      </_FlexCenter>
    </_MappingView>
  )
}

// ___________
//
const _MappingView = styled.div`
  font-size: 3rem;
`

const _FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const _ArrowDiv = styled.div`
  display: flex;
  position: relative;
  margin: 0px 1rem;
  align-items: center;
  color: ${(p) => p.theme.secondary};
  svg {
    width: 5rem;
  }
  &:before {
    content: 'f';
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, 0px);
    font-weight: bold;
  }
`

export default MappingView
