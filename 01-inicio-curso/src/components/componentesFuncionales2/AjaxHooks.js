import { useState, useEffect } from "react";


function Pokemon({avatar,name}){
  return(
    <figure>
      <img src={avatar} alt={name}></img>
      <figcaption>{name}</figcaption>
    </figure>
  )
}

export function AjaxHooks(){
  const [pokemons, setPokemons] = useState([]);

  //El useEffect comentado es la adaptacion del codigo que hice para la peticion con una clase a una peticion con componente funcional:

  // useEffect(()=>{
  //   let url = "https://pokeapi.co/api/v2/pokemon/";
  //   fetch(url)
  //   .then(res=> res.json())
  //   .then(json => {
  //     json.results.forEach(element =>{
  //       fetch(element.url)
  //       .then(res=>res.json())
  //       .then(json => {
  //         let pokemon = {
  //           id: json.id,
  //           name:json.name,
  //           avatar:json.sprites.front_default
  //         }
  //         //podemos pasarle una funcion como parametro al setPokemons, en este caso actualiza la variable pokemons, agregandole elementos al array.
  //         setPokemons((pokemons)=>[...pokemons,pokemon])
  //       })
  //     })
  //   })
  // },[])

  //Ahora modifico el codigo anterior para hacer la misma peticion pero con async y await:
  //no se debe hacer asincrona la funcion flecha que es el primer parametro del useEffect, la documentacion de react dice que es un antipatron, sino que hay que hacer que esa funcion flecha anonima contenga la funcion asíncrona

  useEffect(()=>{
    const getPokemons = async (url)=>{
      //con la coma se están declarando 2 varaibles, x eso json no necesita un let para definirse.
      let res = await fetch(url),
      json = await res.json();
      console.log(json);

      json.results.forEach(async (element )=>{
        let res = await fetch(element.url),
        json = await res.json();
          let pokemon = {
            id: json.id,
            name:json.name,
            avatar:json.sprites.front_default
          }
          //podemos pasarle una funcion como parametro al setPokemons, en este caso actualiza la variable pokemons, agregandole elementos al array.
          //como el setPokemons está dentro del forEach, por cada objeto pokemon que cree el forEach, lo va a agregar al array de pokemons con las funcion setPokemons.
          setPokemons((pokemons)=>[...pokemons,pokemon])
      })
    }

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  },[])
  return(
    <>
    <h2>Peticiones asíncronas en componentes funcionales con hooks:</h2>
    {pokemons.length === 0? (
    <h3>Cargando...</h3>
    ):
    (pokemons.map(el =>(
      <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>
    ))
    )}
    

    </>
  )
}