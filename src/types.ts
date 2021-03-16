export type Problem = {
  level: number
  id: number
  env: string
  map: { from: string; to: string }
  sheet: string[]
  choices: string[]
  collectAnswer: string[]
}

export type StoredProblem = {
  env: string
  map: { from: string; to: string }
  sheet: string[]
  choices: string[]
  collectAnswer: string[]
}
