export type Problem = {
  level: number
  id: number
  createdAt: string
  env: string
  map: { from: string; to: string }
  sheet: string[]
  choices: string[]
  collectAnswer: string[]
}

export type StoredProblem = {
  createdAt: string
  env: string
  map: { from: string; to: string }
  sheet: string[]
  choices: string[]
  collectAnswer: string[]
}
