import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'

// ___________
//
const HomePage: React.VFC<RouteComponentProps> = () => {
  return (
    <div>
      <_Section>
        <h2>問題一覧</h2>
        <div>
          <h3>
            Lv. <_Star />
          </h3>
          <div></div>
          <h3>Lv. <_Star /><_Star /></h3>
          <div></div>
          <h3>Lv. <_Star /><_Star /><_Star /></h3>
          <div></div>
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

// ___________
//
export default HomePage
