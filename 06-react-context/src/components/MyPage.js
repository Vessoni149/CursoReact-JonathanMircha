import React from 'react'
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import {useState} from "react";

export function MyPage(props) {
  //      (
  //Acá tenemos una variable de estado que controla el estilo que van a tener los componentes de la página. Cada componente recibe éste estado como prop y específicamente Header lo controla recibiendo setTheme como prop que la usa en los eventos onClick de los inputs.
  //De esta manera, para que TOOODOS los compionetnes de la pagina tengan estos themes, tendriamos que pasarle como prop theme a todos estos componentes, y para evitar esto es que se usa Context, para ahorrar el paso de proprs que deban se usadas por muchos componentes.
  const initialTheme = "light"
  const [theme, setTheme] = useState(initialTheme);
  const translations = {
    es:{  headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",},
    en:{
      headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
    }
  }
  const [texts, setTexts] = useState(translations.es); 
  const initialSession = true;
  const [session, setSession] = useState(initialSession);
  //        )

  const handleTheme = (e)=>{
    if(e.target.value === "light"){
      setTheme("light")
    }else{
      setTheme("dark")
    }
  }

  const handleLanguage = (e)=>{
    if(e.target.value === "es"){
      setTexts(translations.es)
    }else{
      setTexts(translations.en)
    }
  }

  const handleSession = (e)=>{
    if(session){
      setSession(null);
    }else{
      setSession(true);
    }
    
  }

  return (
    <div className='my-page'>
      <Header theme={theme} texts={texts} handleTheme={handleTheme} handleLanguage={handleLanguage} session={session} handleSession={handleSession}/>
      <Main theme={theme} texts={texts} session={session}/>
      <Footer theme={theme} texts={texts}/>
    
    
    </div>
  )
}
