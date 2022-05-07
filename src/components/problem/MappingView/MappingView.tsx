import React from 'react'

import { Arrow } from '@/components/ui/Icons'

import styles from './MappingView.module.scss'

// ___________
//
type MappingViewProps = {
  from: string
  to: string
}

// ___________
//
const MappingView: React.VFC<MappingViewProps> = ({ from, to }) => {
  return (
    <div className={styles.mappingView}>
      <div className={styles.flexCenter}>
        <div>{from}</div>
        <div className={styles.arrowWrapper}>
          <div>
            <Arrow />
          </div>
        </div>
        <div>{to}</div>
      </div>
    </div>
  )
}

export default MappingView
