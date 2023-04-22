import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext';
import LanguageContext from './context/LanguageContext';
import SessionContext from './context/SessionContext';
export function MainContext() {
  const {theme} = useContext(ThemeContext);
  const {texts} = useContext(LanguageContext);
  const {session} = useContext(SessionContext)
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
