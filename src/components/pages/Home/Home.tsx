import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'

import { ProblemList } from '@/components/molecules/ProblemList'

// ___________
//
const HomePage: React.VFC<RouteComponentProps> = () => {
  return (
    <div>
      <_Section>
        <h2>問題一覧</h2>
        <div>
          <_H3>
            Lv. <_Star />
          </_H3>
          <div>
            <ProblemList level={1} />
          </div>
          <_H3>
            Lv. <_Star />
            <_Star />
          </_H3>
          <div>
            <ProblemList level={2} />
          </div>
          <_H3>
            Lv. <_Star />
            <_Star />
            <_Star />
          </_H3>
          <div>
            <ProblemList level={3} />
          </div>
        </div>
      </_Section>
      <_Section>
        <h2>このサイトについて</h2>
        <div>
          <p>ここは、Haskell 初学者に向けた関数合成のパズルサイトです</p>
          <p>
            本・記事を読んで勉強しているだけでは力が付かない、けれどいきなり実践は難しいと考えている人にぴったりだと思います
          </p>
        </div>
      </_Section>
    </div>
  )
}

// ___________
//
const _Star = styled.span`
  margin: 0px 2px;
  color: ${(p) => p.theme.secondary};
  &:before {
    content: '★';
  }
`

const _Section = styled.section`
  margin-bottom: 5rem;
  p {
    margin: 6px 0px;
    color: ${(p) => p.theme.gray2};
  }
`

const _H3 = styled.h3`
  margin-bottom: 0.5rem;
`

// ___________
//
export default HomePage
