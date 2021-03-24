import type { StoredProblem } from '@/types'

export default [
  {
    title: 'even は偶数字数',
    env: 'GHC 8.6.5',
    map: { from: '["odd", "even"]', to: '[False, True]' },
    sheet: ['f = ■ $ ■ . ■'],
    choices: ['odd', 'even', 'length', 'map'],
    collectAnswer: ['map', 'even', 'length'],
    comment: '',
  },
  {
    title: '',
    env: 'GHC 8.6.5',
    map: {
      from: '[1,2,3]',
      to: '[2,4,6]',
    },
    sheet: ['f = foldr (■ . ■) []'],
    choices: ['map', '(:)', '(++)', 'flip (:)', '(*2)'],
    collectAnswer: ['(:)', '(*2)'],
    comment: '',
  },
  {
    title: 'True カウンター',
    env: 'GHC 8.6.5',
    map: { from: '[True, False, True]', to: '2' },
    sheet: ['f = ■ . ■ ■'],
    choices: ['id', 'filter', 'length', 'map'],
    collectAnswer: ['length', 'filter', 'id'],
    comment: '',
  },
  {
    title: '',
    env: 'GHC 8.6.5',
    map: {
      from: '[1,2,3]',
      to: '[3,2,1]',
    },
    sheet: ['f = ■ (■) []'],
    choices: ['map', 'foldl', 'foldr', 'flip (:)', '(:)'],
    collectAnswer: ['foldl', 'flip (:)'],
    comment: '',
  },
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
    comment: '',
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
    comment: '',
  },
] as StoredProblem[]
