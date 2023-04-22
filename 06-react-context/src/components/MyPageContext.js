import React from 'react'
import { HeaderContext } from './HeaderContext';
import { MainContext } from './MainContext';
import { FooterContext } from './FooterContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { SessionProvider } from './context/SessionContext';

//Pasos para usar Context:
//ver como se aplica paso por paso en archivo LanguageContext.js
//1) creamos una carepta donde vamos a poner todos los contextos que necesitemos. Por cada contexto  1 archivo.js Ej: ThemeContext
//2) En el archivo creado,  creamos una constante con el nombre del contexto = createContext(). Y lo exportamos por defecto
//3) En el mismo archivo crear un componente proveedor y pasarle como prop {children}, ya que va a envolver a los hijos que usen sus valores. Exportar ese componente, ej: export {ComponenteProvider};
//4) Este componente  contendrá toda la logica que necesitamos pasar como prop a los hijos.
//5) creamos un objeto con los valores que vamos a pasar como prop a este componente provider.
//6) ese componente va a retornar el <ComponentContext.provider>
//7) Ahora, en el <ComponenteContext.Provider> hacemos que envuelva a {children}
//8) y al <ComponenteContext.Provider> le pasamos las props que necesita. El nombre de la prop debe ser "value" y va a ser = al objeto que contiene las props que queremos pasar, el objeto puede tener cualquier nombre.

//Ahora en cada COMPONETE HIJO CONSUMIDOR:
//9) En el archivo del componente hijo (ver de Ej. HeaderContext.js) hay que desestructurar las variables que vienen del contexto, e igualarlas a useContext(ComponenteContext) ej: const {theme, handleTheme} = useContext(ThemeContext);
//10) en el componente que retorne el componente Consumidor ej HeaderContext.js es retornado acá en MyPageContext.js hay que envolverlo en el provider (ej <LanguageProvider>), al cual vamos a tener que importar.
//El componente consumidor no va a tener que tener props.

export function MyPageContext(props) {
  
  


  return (
    <div className='my-page'>
      <SessionProvider>
      <LanguageProvider>
      <ThemeProvider>

      <HeaderContext/>

      <MainContext/>

      <FooterContext/>

      </ThemeProvider>
      </LanguageProvider>
      </SessionProvider>
    
    </div>
  )
}
