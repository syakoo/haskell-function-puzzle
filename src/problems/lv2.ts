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
      from: '[1,2,3]',
      to: '[2,4,6]',
    },
    sheet: ['f = foldr (■ . ■) []'],
    choices: ['map', '(:)', '(++)', 'flip (:)', '(*2)'],
    collectAnswer: ['(:)', '(*2)'],
  },
  {
    createdAt: '2021/03/16',
    env: 'GHC 8.6.5',
    map: { from: '[True, False, True]', to: '2' },
    sheet: ['f = ■ . ■ ■'],
    choices: ['id', 'filter', 'length', 'map'],
    collectAnswer: ['length', 'filter', 'id'],
  },
  {
    createdAt: '2021/03/16',
    env: 'GHC 8.6.5',
    map: {
      from: '[1,2,3]',
      to: '[3,2,1]',
    },
    sheet: ['f = ■ (■) []'],
    choices: ['map', 'foldl', 'foldr', 'flip (:)', '(:)'],
    collectAnswer: ['foldl', 'flip (:)'],
  },
] as StoredProblem[]
