import React from 'react'

export function Main({theme, texts, session}) {
  

  return (
    <main className={theme}>
      {session?
      <p>{texts.mainHello}</p>
      :
      <p>{texts.mainWelcome}</p>
      }
      <p>{texts.mainContent}</p>

  </main>
  )
}
