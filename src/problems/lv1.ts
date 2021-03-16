import type { StoredProblem } from '@/types'

export default [
  {
    createdAt: '2021/03/15',
    env: 'GHC 8.6.5',
    map: { from: '[1, 2, 3]', to: '[2, 3, 4]' },
    sheet: ['f = ■ ■'],
    choices: ['map', '(+1)', '(-1)'],
    collectAnswer: ['map', '(+1)'],
  },
] as StoredProblem[]
