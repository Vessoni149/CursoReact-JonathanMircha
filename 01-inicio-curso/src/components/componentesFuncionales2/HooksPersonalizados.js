import React from "react";
import { useFetch } from "./hooks/useFetch";

export function HooksPersonalizados(){
  //console.log(useFetch())
  let url = "https://pokeapi.co/api/v2/pokemon/";
  //Acá creo 3 variables, que son extraidas del useFetch con la url que se le pase.
  //luego se mostraran en los <h3> en formato string
  let {data, isPending, error} = useFetch(url)
  return (
    //No voy a retornar los poemones xq ya lo hice 2 veces, solo mostraremos los resultados parseados a stirng
    <>
    <h2>Hooks personalizados</h2>
    <h3>{JSON.stringify(isPending)}</h3>
    <h3>
      <mark>{JSON.stringify(error)}
      </mark>
      </h3>
    <h3>
      <pre style={{whiteSpace:"pre-wrap"}}>
        <code>
          {JSON.stringify(data)}
        </code>
      </pre>
    </h3>
    </>
  )
}