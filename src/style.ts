import { createGlobalStyle } from 'styled-components'

// ____________________
//
export const theme = {
  secondary: '#5e5086',
  primary: '#453a62',
  white: '#fff',
  gray: '#eee',
  gray2: '#aaa',
  gray3: '#454545',
  black: '#252525',
  red: '#ef0130',
  small: '700px',
}

export const GlobalStyle = createGlobalStyle<Theme>`
body {
  background-color: ${(p) => p.gray};
  color: ${(p) => p.black};
  margin: 0px;
  font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体,
  Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN, Hiragino Kaku Gothic ProN,
  メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, sans-serif;
}
`

// ____________________
//
type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
