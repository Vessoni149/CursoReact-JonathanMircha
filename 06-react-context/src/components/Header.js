import React from 'react'

export function Header({theme, handleTheme, texts, handleLanguage, session, handleSession}) {
  

  return (
    <header className={theme}>
    <h2>{texts.headerTitle}</h2>
    <h3>{texts.headerSubtitle}</h3>
    <select name='language' onChange={handleLanguage}>
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>

    <input 
    type='radio' 
    name='theme' 
    id='light' 
    onClick={handleTheme} 
    value="light"/>
    <label htmlFor='light'>{texts.headerLight}</label>
  
    <input 
    type='radio' 
    name='theme' 
    id='dark' 
    onClick={handleTheme} 
    value="dark"/>
    <label htmlFor='dark'>{texts.headerDark}</label>
  
    <button onClick={handleSession}>
      {session ?
      texts.buttonLogout
      :
      texts.buttonLogin 
      }</button>

  </header>
  )
}
