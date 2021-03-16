import React from 'react'
import styled from 'styled-components'

import { useDrag } from 'react-dnd'

// ___________
//
type ChoiceProps = {
  txt: string
}

// ___________
//
const Choice: React.VFC<ChoiceProps> = ({ txt }) => {
  const [, dragRef] = useDrag(() => ({
    type: 'CHOICE',
    item: { txt },
  }))

  return <_Block ref={dragRef}>{txt}</_Block>
}

// ___________
//
const _Block = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  padding: 3px;
  border: 1px solid ${(p) => p.theme.gray2};
  border-radius: 5px;
  background-color: ${(p) => p.theme.gray3};
  &:hover {
    cursor: grab;
  }
`

export default Choice
