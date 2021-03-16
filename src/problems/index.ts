import lv1 from './lv1'

import type { StoredProblem, Problem } from '@/types'

// ___________
//
/**
 * 問題一覧の取得
 */
export function fetchProblemsByLv(lv: number): StoredProblem[] {
  switch (lv) {
    case 1:
      return lv1
  }
  return []
}

/**
 * 問題の取得
 */
export function fetchProblem(lv: number, id: number): Problem | null {
  const problems = fetchProblemsByLv(lv)
  if (problems.length > id) {
    const result: Problem = {
      level: lv,
      id,
      ...problems[id],
    }

    return result
  }

  return null
}
