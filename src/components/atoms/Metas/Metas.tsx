import Head from 'next/head'
import React from 'react'

// __________
//
const Metas: React.VFC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Haskell Function Puzzle</title>
      <meta
        property="og:url"
        content="https://syakoo.github.io/haskell-function-puzzle/"
      />
      <meta property="og:title" content="Haskell Function Puzzle" />
      <meta
        property="og:image"
        content="https://syakoo.github.io/haskell-function-puzzle/logo.png"
      />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="Haskell Function Puzzle" />
      <meta
        property="twitter:image"
        content="https://syakoo.github.io/haskell-function-puzzle/logo.png"
      />
      <link
        rel="icon"
        href="https://haskell-function-puzzle.vercel.app/logo.ico"
      />
    </Head>
  )
}

export default Metas
