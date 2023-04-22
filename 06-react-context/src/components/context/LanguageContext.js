import { createContext } from "react";
import { useState } from "react";
//1: crear la carpeta contenedora de los contextos y un archivo por cada contexto.
//2:  en el archivo creado para un contexto determinado creamos el context, con el mismo nombre del archivo preferentemente, y lo exportamos por default.
const LanguageContext = createContext();

//3: creamos el componente que va a ser el provider y que va a tener como props a children, ya que será el componente padre de éstos.:
const LanguageProvider = ({children})=>{

//4: escribimos la lógica que tendrían los componentes hijo pero acá. (Funciones y estados.):
const translations = {
  es:{  headerTitle: "Mi aplicación CON Context API",
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
    headerTitle: "My application WHIT Context API",
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

const handleLanguage = (e)=>{
  if(e.target.value === "es"){
    setTexts(translations.es)
  }else{
    setTexts(translations.en)
  }
}

//5: creamos el objeto que contendrá los valores que le vamos a querer pasar a los hijos:
const data = {
  texts, 
  handleLanguage
}

//6: Éste componente va a retornar el elemento provider del contexto que creamos con createContext() en el paso 3:
//7: dentro del provider le ponemos como elemento hijo la propiedad {children}:
//8: al <ComponenteContext.Provider> le pasamos las props que necesita. El nombre de la prop debe ser "value" y va a ser = al objeto que contiene las props que queremos pasar, el objeto puede tener cualquier nombre.
return(
  <LanguageContext.Provider value={data}>
    {children}
  </LanguageContext.Provider>
)

}
export {LanguageProvider};
export default LanguageContext;