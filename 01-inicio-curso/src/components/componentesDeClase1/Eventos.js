//Eventos en componente de clase:

import React, {Component} from "react";

export class EventosES6 extends Component{
  //A aprtir de ECMAScript 7 se agrego una forma mas simplificada de definir un compo de clase sin la necesidad de crear un constructor y hacer el bindeo de los metodos. Con propertyInitializers.
  constructor(props){
    super(props);
    this.state = {
      contador:0,
    }
    //hay que "bindear" el this para poder usar los metodos en los componentes de clase
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  } 

  sumar(e){
    this.setState({
      contador:this.state.contador +1,
  })
  }
  restar(){
    this.setState({
      contador:this.state.contador -1,
  })
  }

  render(){
    return(
      <div>
        <h2>Eventos en componentes de clase ES6.</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      
      </div>
    )
  }
}

export class EventosES7 extends Component{
  //A aprtir de ES7 no hace falta usar el constructor
  //y el estado se define de otra forma:
  state = {
    contador: 0,
  }
//Las funciones flecha heredan el this del contexto en el que se encuentran, por eso no es necesario hacer el bindeo en el metodo cosntructor.
  sumar = (e)=>{
    this.setState({
      contador:this.state.contador +1,
  })
  }
  restar= (e)=>{
    this.setState({
      contador:this.state.contador -1,
  })
  }
  render(){
    return(
      <div>
        <h2>Eventos en componentes de clase ES7.</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      
      </div>
    )
  }
}


//-------------------------------------------------

export class MasSobreEventos extends Component{

  handleClick = (e,mensaje)=>{
    console.log(e.nativeEvent); //asi se accede al evento nativo
    console.log(e) //este syntetic base event es una capa adicional que usa react para envolver algunos eventos.
    console.log(mensaje);
  }

  render(){
    return(
      <div>
        <h2>Mas sobre eventos</h2>
        <h3>Paso de parametros con eventos en una etiqueta o elemento jsx:</h3>
        <button onClick={(e)=> this.handleClick(e,"pasando parametro desde un evento")}>saludar</button>

        {/* evento personalizado:  es crear una prop que se la pasamos al componente y esa prop se la asignamos al evento on click
        Los atributos de eventos como onCLick son para las etiquetas jsx, no para los componentes. Si queremos usar un evento en un componente tendremos que crear una prop, hacer la funcion que querramos que se ejecute, y luego en el componente Boton sí usar el onClick y asignarle este evento que sera prop.myEvento*/}
        <h3>Paso de parametros con eventos en componente</h3>
        <Boton myOnClick={(e)=> this.handleClick(e,"pasando parametro desde un evento")}></Boton>
      </div>
    )
  }
}
function Boton(props){
  return <button onClick={props.myOnClick}>boton componente</button>
}