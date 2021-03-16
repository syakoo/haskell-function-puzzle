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
  {
    createdAt: '2021/03/16',
    env: 'GHC 8.6.5',
    map: {
      from: '[1,2,3]', to: '[2,4,6]',
    },
    sheet: ['f = foldr (■ . ■) []'],
    choices: ['map', '(:)', '(++)', 'flip (:)', '(*2)'],
    collectAnswer: ['(:)', '(*2)'],
  },
] as StoredProblem[]
