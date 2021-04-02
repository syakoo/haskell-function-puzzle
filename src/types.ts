export type StoredProblem = {
  title: string
  env: string
  map: { from: string; to: string }
  sheet: string[]
  choices: string[]
  correctAnswer: string[]
  comment: string
}

export type Problem = StoredProblem & {
  level: number
  id: number
}
