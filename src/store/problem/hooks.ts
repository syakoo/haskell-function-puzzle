import { useSetRecoilState, useRecoilValue } from 'recoil'

import { problemAtom } from './atom'

// __________
//
export const useProblemState = () => {
  return useRecoilValue(problemAtom)
}

export const useProblemActions = () => {
  const setProblem = useSetRecoilState(problemAtom)

  return { setProblem }
}

export const useProblem = () => {
  return [useProblemState(), useProblemActions()] as const
}
