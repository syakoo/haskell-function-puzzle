import type { StoredProblem } from '@/types'

export default [
  {
    env: 'GHC 8.6.5',
    map: { from: '[1, 2, 3]', to: '[2, 3, 4]' },
    sheet: ['f = ■ ■'],
    choices: ['map', '(+1)', '(-1)'],
    collectAnswer: ['map', '(+1)'],
  },
  {
    env: 'GHC 8.6.5',
    map: { from: '[1, 2, 3]', to: '2' },
    sheet: ['f = ■ . ■'],
    choices: ['tail', 'head', 'reverse'],
    collectAnswer: ['head', 'tail'],
  },
  {
    env: 'GHC 8.6.5',
    map: { from: '[1, 2, 3]', to: '3' },
    sheet: ['f = ■ . ■'],
    choices: ['tail', 'head', 'reverse'],
    collectAnswer: ['head', 'reverse'],
  },
  {
    env: 'GHC 8.6.5',
    map: { from: '3', to: '[1, 2, 3]' },
    sheet: ['f = ■ ■ [1..]'],
    choices: ['take', 'repeat', 'flip'],
    collectAnswer: ['flip', 'take'],
  },
  {
    env: 'GHC 8.6.5',
    map: { from: '["abc", "def"]', to: '["cba", "fed"]' },
    sheet: ['f = ■ ■'],
    choices: ['foldr', 'map', 'reverse'],
    collectAnswer: ['map', 'reverse'],
  },
] as StoredProblem[]
