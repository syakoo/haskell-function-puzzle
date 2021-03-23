import React from 'react'

import { ProblemList } from '@/components/molecules/ProblemList'

import styles from './Home.module.scss'

// ___________
//
const HomePage: React.VFC = () => {
  return (
    <div>
      <section className={styles.section}>
        <h2>問題一覧</h2>
        <div>
          <h3 className={styles.h3}>
            Lv. <span className={styles.star} />
          </h3>
          <div>
            <ProblemList level={1} />
          </div>
          <h3>
            Lv. <span className={styles.star} />
            <span className={styles.star} />
          </h3>
          <div>
            <ProblemList level={2} />
          </div>
          <h3>
            Lv. <span className={styles.star} />
            <span className={styles.star} />
            <span className={styles.star} />
          </h3>
          <div>
            <ProblemList level={3} />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>このサイトについて</h2>
        <div>
          <p>ここは、Haskell 初学者に向けた関数合成のパズルサイトです</p>
          <p>
            本・記事を読んで勉強しているだけでは力が付かない、けれどいきなり実践は難しいと考えている人にぴったりだと思います
          </p>
        </div>
      </section>
    </div>
  )
}

// ___________
//
export default HomePage
