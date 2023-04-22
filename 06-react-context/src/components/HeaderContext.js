import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext';
import LanguageContext from './context/LanguageContext';
import SessionContext from './context/SessionContext';
export function HeaderContext() {

  //Aca usando el hook useContext (que reemplaza al privider) desescructuramos los valores que necesitamos. UseContext recibe como parametro el contexto que creamos
   //9: 
  const {theme, handleTheme} = useContext(ThemeContext);
  const {texts, handleLanguage} = useContext(LanguageContext);
  const {session, handleSession} = useContext(SessionContext);
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
    id='lightContext' 
    onClick={handleTheme} 
    value="light"/>
    <label htmlFor='lightContext'>{texts.headerLight}</label>
  
    <input 
    type='radio' 
    name='theme' 
    id='darkContext' 
    onClick={handleTheme} 
    value="darck"/>
    <label htmlFor='darkContext'>{texts.headerDark}</label>
  
    <button onClick={handleSession}>
      {session ?
      texts.buttonLogout
      :
      texts.buttonLogin 
      }</button>

  </header>
  )
}
