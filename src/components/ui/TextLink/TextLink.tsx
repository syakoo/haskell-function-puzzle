import React from 'react'
import Link, { LinkProps } from 'next/link'

import styles from './TextLink.module.scss'

// __________
//
const TextLink: React.VFC<React.PropsWithChildren<LinkProps>> = ({
  ...props
}) => {
  return (
    <Link {...props}>
      <a className={styles.link}>{props.children}</a>
    </Link>
  )
}

export default TextLink
