import React from 'react'

export function Footer({theme, texts}) {
  

  return (
    <footer className={theme}>
    <h4>{texts.footerTitle}</h4>
  </footer>
  )
}
