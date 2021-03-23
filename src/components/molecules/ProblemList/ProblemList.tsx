import React, { useMemo } from 'react'
import Link from 'next/link'

import { fetchProblemsByLv } from '@/problems'

import styles from './ProblemList.module.scss'

// ___________
//
type ProblemListProps = {
  level: number
}

// ___________
//
const ProblemList: React.VFC<ProblemListProps> = ({ level }) => {
  const problems = useMemo(() => {
    return fetchProblemsByLv(level)
  }, [level])

  return (
    <div>
      {problems.map((p, i) => (
        <Link key={i} href={`/problem/${level}/${i}`}>
          <a className={styles.link}>[{i}]</a>
        </Link>
      ))}
    </div>
  )
}

export default ProblemList
