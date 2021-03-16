import type { StoredProblem } from '@/types'

export default [
  {
    createdAt: '2021/03/16',
    env: 'GHC 8.6.5',
    map: { from: '["odd", "even"]', to: '[False, True]' },
    sheet: ['f = ■ $ ■ . ■'],
    choices: ['odd', 'even', 'length', 'map'],
    collectAnswer: ['map', 'even', 'length'],
  },
] as StoredProblem[]
