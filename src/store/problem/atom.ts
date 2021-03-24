import { atom } from 'recoil'

import type { Problem } from '@/types'

// __________
//
export const problemAtom = atom<Problem | null>({
  key: 'PROBLEM',
  default: null,
})
