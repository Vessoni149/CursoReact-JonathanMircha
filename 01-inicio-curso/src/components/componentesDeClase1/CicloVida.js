import React, {Component} from "react";

//ciclo e vida de los componentes de clase:

export class CicloVida extends Component{
  constructor(props){
    super(props);
    console.log(0, "El componente se inicializa, aun no está en el DOM");
    // caundo trabajamos con peticiones, no es correcto poner el metodo que hace la pet en el metodo constructor, ya que como acá todavía no se pone nada en el dom, no podria mos usar los datos que devuelve la peticion para trabajar el dom. Entonces el metodo componentDidMount que se usa para eso, debe ir afuera.
    this.state ={
      hora: new Date().toLocaleTimeString(),
      visile: false
    }
    this.temporizador = null;
  }

  componentDidMount(){
    console.log(1, "el componente ya se encuentra en el dom")
  }

componentDidUpdate(prevProps, prevState){
  console.log(2, "El estado o las props del componente han cambiado");
  console.log(prevProps);
  console.log(prevState);
}



tictac = ()=>{
  this.temporizador = setInterval(()=>{
    this.setState({
      hora: new Date().toLocaleTimeString()
    })
  },1000)
}

iniciar = () =>{
  this.tictac();
  this.setState({
    visile: true
  })
}

detener = () =>{
  clearInterval(this.temporizador);
  this.setState({
    visile: false
  })
}

  render(){
    console.log(4, "El componente se dijuba o redibuja por algun cambio en el estado o DOM.")
    return(
      <>
      <h2>Ciclo de vida de los componentes de clase.</h2>
      {this.state.visile && <Reloj hora={this.state.hora}></Reloj>}
      
      <button onClick={this.iniciar}>Iniciar</button>
      <button onClick={this.detener}>Detener</button>
      </>
    )
  }
}

class Reloj extends Component{
  constructor(props){
    super(props);
  }
  componentWillUnmount(){
    console.log(3,"El componente ha sido eliminado del DOM")
  }
  render(){
    return(
    <h3>{this.props.hora}</h3>
    )
  }
}