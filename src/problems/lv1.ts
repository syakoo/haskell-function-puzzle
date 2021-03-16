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
  {
    createdAt: '2021/03/16',
    env: 'GHC 8.6.5',
    map: { from: '[1, 2, 3]', to: '2' },
    sheet: ['f = ■ . ■'],
    choices: ['tail', 'head', 'reverse'],
    collectAnswer: ['head', 'tail'],
  },
  {
    createdAt: '2021/03/16',
    env: 'GHC 8.6.5',
    map: { from: '[1, 2, 3]', to: '3' },
    sheet: ['f = ■ . ■'],
    choices: ['tail', 'head', 'reverse'],
    collectAnswer: ['head', 'reverse'],
  },
  {
    createdAt: '2021/03/16',
    env: 'GHC 8.6.5',
    map: { from: '3', to: '[1, 2, 3]' },
    sheet: ['f = ■ 3 ■'],
    choices: ['take', 'repeat', '[1..]', '[0..]'],
    collectAnswer: ['take', '[1..]'],
  },
  {
    createdAt: '2021/03/16',
    env: 'GHC 8.6.5',
    map: { from: '["abc", "def"]', to: '["cba", "fed"]' },
    sheet: ['f = ■ ■'],
    choices: ['foldr', 'map', 'reverse'],
    collectAnswer: ['map', 'reverse'],
  },
] as StoredProblem[]
