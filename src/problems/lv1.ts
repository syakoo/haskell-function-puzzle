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
  {
    env: 'GHC 8.6.5',
    map: { from: '[1, 2, 3]', to: '[1, 2, 4]' },
    sheet: ['f = ■ . ■'],
    choices: ['tail', 'init', '(4:)', '(++[4])'],
    collectAnswer: ['(++[4])', 'init'],
  },
  {
    env: 'GHC 8.6.5',
    map: { from: '[1, 2, 3, 4, 5]', to: '[4, 5]' },
    sheet: ['f = ■ ■'],
    choices: ['take', 'drop', '3', '2'],
    collectAnswer: ['drop', '3'],
  },
  {
    env: 'GHC 8.6.5',
    map: { from: '[1, 2, 3, 4, 5]', to: '[4, 5]' },
    sheet: ['f = ■ ■'],
    choices: ['dropWhile', 'drop', '(<4)', '2'],
    collectAnswer: ['dropWhile', '(<4)'],
  },
  {
    env: 'GHC 8.6.5',
    map: { from: '1', to: '[1, 11, 111, 1111, 11111]' },
    sheet: ['f = take 5 . ■ (\\x -> x*■ + 1)'],
    choices: ['iterate', 'repeat', '10', '11'],
    collectAnswer: ['iterate', '10'],
  },
  {
    env: 'GHC 8.6.5',
    map: { from: '[3, 1, 4, 1, 5]', to: '[(0, 3), (1, 1), (2, 4)]' },
    sheet: ['f = ■ ■'],
    choices: ['zip', 'take', '[0..]', '[0..2]'],
    collectAnswer: ['zip', '[0..2]'],
  },
] as StoredProblem[]
