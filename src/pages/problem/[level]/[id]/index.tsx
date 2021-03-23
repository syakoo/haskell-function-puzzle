import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'

import { fetchProblemsAll, fetchProblem } from '@/problems'
import type { Problem } from '@/types'
const ProblemPageComponent = dynamic(
  () => import('@/components/pages/Problem/Problem'),
  { ssr: false }
)

// ___________
//
type ProblemPageProps = {
  problem: Problem
}

// ___________
//
const ProblemPage: NextPage<ProblemPageProps> = ({ problem }) => {
  return <ProblemPageComponent problem={problem} />
}

// ___________
//
export const getStaticPaths: GetStaticPaths = async () => {
  const problems = fetchProblemsAll()
  const paths = problems.map((p) => `/problem/${p.level}/${p.id}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  ProblemPageProps,
  { level: string; id: string }
> = async ({ params }) => {
  if (!params) throw Error('Problem Not Found')
  const { level, id } = params
  const problem = fetchProblem(+level, +id)
  if (!problem) throw Error('Problem Not Found')

  return {
    props: {
      problem,
    },
  }
}

export default ProblemPage
