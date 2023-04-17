//el nombre de los archivos de hooks van con lowerCamellCase.
import { useState, useEffect } from "react";

export const useFetch = (url)=>{
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const getData = async (url)=>{
      try{
        let res = await fetch(url);
        //si hubo un error, osea, res.ok es false
        if(!res.ok){    
          //throw es como un return para errores, en este caso crearemos un objeto con 3 propiedades, el error, si existe o no, el status (todas las peticiones fetch tienen una prop status que viene del objeto ajax), y es status text que es el posible mensaje que pueda devolver la api (como no todas tienen un mensaje de error validamos si lo tiene o no, si no lo tiene le asignamos un string por defecto).
          throw{
            err:true, 
            status:res.status,
             statusText: !res.statusText ? "Ocurrio un error":res.statusText
            }
        }
        //este objeto de error es el que tendra el catch en parametro

        //si la res está ok vamos aseguir trabajando con la peticion:
        let data = await res.json();
        //una vez obtenida la respuesta y convertida a json, actualizamos las variables de estado: la rspuesta ya no estará pendiente, la data ya no será null sino que tendrá la respuesta, y el error tampoco sera null, sino que será un objeto con solo la propiedad err en falso.
        setIsPending(false);
        setData(data);
        setError({err:false});

      }catch(err){
        // Cuando se arroja un objeto con throw, se crea una excepción que es capturada por el primer bloque catch que la atrape. En este caso, la excepción es capturada por el bloque catch dentro de getData, que actualiza los estados de isPending y error con el objeto err que se pasó como argumento.
        //Es importante destacar que el objeto que se arroja con throw puede tener cualquier nombre, no necesariamente tiene que ser err. En este caso, el nombre err se utiliza como una convención para indicar que este objeto representa un error.
        setIsPending(true);
        setError(err);
        //err será el objeto que retorna el throw
      }

    }
    getData(url);

  },[url]);
  //Un hook personalizado tiene que retornar ciertos valores, en este caso retornara un objeto con el valor de la data, usamos shorthands ya que la propiedad y el valor se llamaran igual.
  return {data, isPending, error}
}