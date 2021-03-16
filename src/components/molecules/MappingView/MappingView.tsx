import React from 'react'
import styled, { keyframes } from 'styled-components'

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
          <div>
            <Arrow />
          </div>
        </_ArrowDiv>
        <div>{to}</div>
      </_FlexCenter>
    </_MappingView>
  )
}

// ___________
//
const _MappingView = styled.div`
  font-size: 2.5rem;
`

const _FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const arrowAnimation = keyframes`
  from {
    transform: translateX(-100%); 
    opacity: 0;
  }
  to {
    transform: translateX(0%); 
    opacity: 1;
  }
`

const textFadeIn = keyframes`
  from {
    transform: translate(-50%, 10px);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0px);
    opacity: 1;
  }
`

const _ArrowDiv = styled.div`
  display: flex;
  position: relative;
  margin: 0px 1rem;
  align-items: center;
  color: ${(p) => p.theme.secondary};
  div {
    display: inline-flex;
    overflow-x: hidden;
    svg {
      width: 5rem;
      animation: ${arrowAnimation} 0.5s ease-in-out forwards;
    }
  }
  &:before {
    content: 'f';
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, 0px);
    opacity: 0;
    font-weight: bold;
    animation: ${textFadeIn} 0.3s linear 0.3s forwards;
  }
`

export default MappingView
