//Para crear un contexto hay que declarar una variable con el nombre de nuestro constexto y asignarla a la funcion createContext de React.
//El context internamente tiene 1 objeto, que contiene un wraper o proveedor que dara a los elementos internos  que tenga, todos los valores o variables globales. Por otra parte tiene un cosumer que nos va a permitir consumir los valores que da el proveedor en cada elemento hijo. Pero a partir de la creacion de los hooks de la v16, el consumer es reemplazado por el hook useContext.
import { createContext } from "react";
import { useState } from "react";

const initialTheme = "light"

const ThemeContext = createContext();

//El provider es similar al router, provee una funcionalidad a los hijos que tenga internamente. Por eso se DEBE usar la proiedad CHILDREN.
const ThemeProvider = ({children})=>{
  const [theme, setTheme] = useState(initialTheme);


  const handleTheme = (e)=>{
    if(e.target.value === "light"){
      setTheme("light")
    }else{
      setTheme("dark")
    }
  }
  //Esta funcion/Componente que creamos y que recibe children, va a retornar el ThemeContext, especificamente su objeto Provider. Que va a envolver a todos los hijos que necesiten consumir los valores que el contexto vaya a tener.

  //Se sugiere poner en un objeto todos lo valores que va a tener como prop el provider. El nombre de la prop debe ser "value" y va a ser = al objeto que contiene las props que queremos pasar, el objeto puede tener cualquier nombre.
  const data = {
    theme,
    handleTheme,
  }

  return(
    <ThemeContext.Provider value={data}>
      {children}
      </ThemeContext.Provider>
  )
}

export {ThemeProvider};
export default ThemeContext;