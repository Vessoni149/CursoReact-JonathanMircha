import { Component } from "react";
import data from '../../helpers/data.json';


function ElementoLista(props){
  return(
    <li>
      <a href={props.e.web} target="_blank" rel="noreferrer">{props.e.name}</a>
    </li>
  )
}



export default class RenderizadoElementos extends Component{
  constructor(props){
    super(props);
    this.state = {
      seasons: ["Primavera","Verano","Otoño","Invierno"]
    }
  }
  render(){
    return(
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año:</h3>
        <ol>
        {this.state.seasons.map((elemento,index) => <li key={index}>{elemento}</li>)}
        </ol>

      <hr></hr>

        <h3>Frameworks de javascript:</h3>
        <ul>
          {/* data es el objeto json importado, y frameworks el array que vamos a recorrer con map. Por cada elemento del array, se imprime un componente ElementoLista que recie como prop cada elemento del array, y renderiza su nombre. Ademas le pasamos a cada elemento como key el id de cada elemento del array. */}
          {data.frameworks.map((e) => <ElementoLista key={e.id} e={e}/>)}
        </ul>
      </div>
    )
  }
}