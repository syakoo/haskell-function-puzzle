import type { StoredProblem } from '@/types'

export default [
  {
    createdAt: '2021/03/16',
    env: 'GHC 8.6.5',
    map: { from: '[1, 2, 3]', to: '[[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3],[]]' },
    sheet: ['f = ■ (\\x -> ■)'],
    choices: ['filter', 'filterM', '(<= 3)', '[True, False]'],
    collectAnswer: ['filterM', '[True, False]'],
  },
] as StoredProblem[]
