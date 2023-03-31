import React, {Component} from "react";

function Pokemon(props){
  return(
    <figure>
      <img src={props.avatar} alt={props.name}></img>
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}

export class AjaxApis extends Component{
  state ={
    pokemons:[],
  }

  componentDidMount(){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
    .then(res=> res.json())
    .then(json => {
      json.results.forEach(element =>{
        fetch(element.url)
        .then(res=>res.json())
        .then(json => {
          let pokemon = {
            id: json.id,
            name:json.name,
            avatar:json.sprites.front_default
          }
          let pokemons = [...this.state.pokemons, pokemon];
          //como la variable anterior se llama igual que el estado, no hace falta al setear el estado poner poekmons: pokemons, se abrevia solo poniendo pokemons
          this.setState({pokemons})
        })
      })
    })
  }

  render(){
    return(
      <>
      <h2>Peticiones asíncronas en componentes de clase:</h2>
      {this.state.pokemons.map(el =>(
        <Pokemon key={el.id} name={el.name} avatar={el.avatar}></Pokemon>
      ))}

      </>
    )
  }
}