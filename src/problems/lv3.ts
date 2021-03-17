import type { StoredProblem } from '@/types'

export default [
  {
    title: '',
    env: 'GHC 8.6.5',
    map: {
      from: '[1, 2, 3]',
      to: '[[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]]',
    },
    sheet: ['import Control.Monad', '', 'f = ■ (\\x -> ■)'],
    choices: ['filter', 'filterM', 'x <= 3', '[True, False]'],
    collectAnswer: ['filterM', '[True, False]'],
  },
  {
    title: '2進数？',
    env: 'GHC 8.6.5',
    map: {
      from: '[1, 0, 1, 1]',
      to: '11',
    },
    sheet: ['f = ■ . ■ (*) (iterate (*2) 1) . reverse'],
    choices: ['zip', 'zipWith', 'product', 'sum'],
    collectAnswer: ['sum', 'zipWith'],
  },
] as StoredProblem[]
