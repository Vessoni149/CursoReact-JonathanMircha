import React, {Component} from "react";

export class Padre extends Component{
  state = {
    contador: 0,
  }
  incrementarContador = (e)=>{
    this.setState({contador: this.state.contador +1})
  }
  render(){
    //En el hijo 1 se muestra la comunicacion de componente padre a hijo con props (en el caso de mensaje), y el hijo 2 la de hijo a padre modificando el estado.
    return(
      <>
        <h2>Comunicacion entre componentes</h2>
        
        <Hijo mensaje="Mensaje para el hijo n° 1. El boton no hace nada"></Hijo>
        <p>Contador: <b>{this.state.contador}</b></p>
        <Hijo incrementarCont={this.incrementarContador} mensaje="Mensaje para el hijo n° 2. Incrementando contador del padre"></Hijo>
      </>
    )
  }
};


//Entre componente padre a hijo la info se pasa a travez de props.
function Hijo(props){
  return(
    <>
    <h2>{props.mensaje}</h2>
    {/*Entre componente Hijo a padre, la info puede ser modificada si el hijo modifica el estado de un componente padre a travez de una funcion setState. La funcion debera ser creada en el componente padre, donde está el estado, y pasarla como prop al hijo, que la ejecutara.*/}
    <button onClick={props.incrementarCont}>+</button>
    </>
  )
}

//entre componentes no relacionados directamente, ej de padre a nieto o componestes que no tienen relacion: podemos usar Redux, una libreria externa a react que nos permite manejar un estado gloval; o usar Context, una api interna de react que sirve para lo mismo.

//una cuarta opcion seria usar los portales. Permitiría enviar datos entre los componentes del index.js, x ej entre <App> y otro que creemos. No se seule usar en la práctica.