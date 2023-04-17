import React from "react";
import { useFetch } from "./hooks/useFetch";

export function HooksPersonalizados(){
  //console.log(useFetch())
  let url = "https://pokeapi.co/api/v2/pokemon/";
  //Acá creo 3 variables, que son extraidas del useFetch con la url que se le pase.
  //luego se mostraran en los <h3> en formato string
  let {data, isPending, error} = useFetch(url)
  return (
    //No voy a retornar los pokemones xq ya lo hice 2 veces, solo mostraremos los resultados parseados a stirng
    <>
    <h2>Hooks personalizados</h2>
    <h3>{JSON.stringify(isPending)}</h3>
    <h3>
      <mark>{JSON.stringify(error)}
      </mark>
      </h3>
    <h3>
      {/*<pre> se utiliza para representar texto preformateado, es decir, texto que se muestra exactamente como se escribe en el código HTML, sin que el navegador aplique ningún formato adicional. 
      Es útil para mostrar código fuente, mensajes de error, ASCII art, entre otros.*/}
      <pre style={{whiteSpace:"pre-wrap"}}>
        {/* <code> en HTML se utiliza para representar texto de código o fragmentos de código dentro de un párrafo o una sección de texto. */}
        <code>
          {JSON.stringify(data)}
        </code>
      </pre>
    </h3>
    </>
  )
}