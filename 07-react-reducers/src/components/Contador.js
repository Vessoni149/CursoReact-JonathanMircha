import React from 'react'
import { useReducer} from 'react'
export function Contador() {
  
  //useReducer sirvve para manejar un estado al igual que useState pero la diferencia es que nos permite hacer varias acciones con ese estado en una sola funcion. Podemos definir distintas formas de modificar el estado a diferencia de useState.
  
  //La funcion reducer recibe como primer parametro el estado previo, y como segundo un objeto que va a tener un tipo de accion a ejecutar, y puede o no tener un payload, o valor que modificara al estado. Esta funcion siempre va a retornar el estado. 
  //retorna el nuevo estado modificado (o no)

  function reducer(state, action){
    switch(action.type){
      case TYPES.INCREMENT:
        return {contador:state.contador + 1};
        case TYPES.INCREMENT_5:
          return {contador:state.contador + action.payload}
      case TYPES.DECREMENT:
        return {contador:state.contador - 1};
        case TYPES.DECREMENT_5:
          return {contador:state.contador - action.payload}
          case TYPES.RESET:
            return initialState;
        default:
          return state;
    }
  }
  const init = (initialState)=>{
    return{
      contador: initialState.contador + 100
    }
  }

  const TYPES = {
    INCREMENT: "INCREMENT",
    INCREMENT_5:"INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5:"DECREMENT_5",
    RESET: "RESET"
  }

  //El estado inicial debe ser un objeto que contenga la variable.
  const initialState = {contador:0};
  
  //El hook use reducer recibe 2 parametros obligatorios (puede tener 3 pero ese se verá despues).
  //El primero, reducer, es una funcion que nos permite manipular el estado y que lo retorna en su nueva version.
  const [state, dispatch] = useReducer(reducer, initialState, init);
  //init es un parametro opcional que sirve para transformar el initialState solo para cuando de renderiza por primera vez el componente.

  //dispatch es la funcion que recibe un objeto que tiene 2 atributos, 1 la accion que va a realizar el reducer, y 2 un payload (opcional). Cuando se ejecute el dispatch, va a cambiarse la accion del reducer y se va a ejecutar el mismo con el valor acá indicado en el type. Es una funcion que modifica otra funcion basicamente.
  //Por buena practica se recomienda poner las opciones en mayus, ya que se consideran constantes. De hecho se recomientda tener un objeto con los distintos tipos de acciones.
  //Por otra parte el payload, es el nuevo valor que va a modificar de alguna manera al estado.

  //en resumen dsipatch despacha la accion que se va a ejecutar en el reducer, y en caso de que haya que mandar un valor para ejecutar dicha accion, lo manda a través del payload.
  const sumar = ()=>{
    dispatch({type:TYPES.INCREMENT})
  }
  const sumar5 = ()=>{
    dispatch({type:TYPES.INCREMENT_5, payload : 5})
  }
  const restar = ()=>{
    dispatch({type:TYPES.DECREMENT})
  }
  const restar5 = ()=>{
    dispatch({type:TYPES.DECREMENT_5, payload : 5})
  }
  const reset = ()=>{
    dispatch({type:TYPES.RESET});
  }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Contador con Reducer</h2>
      <nav>
        
        <button onClick={sumar}>+</button>
        <button onClick={sumar5}>+5</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
        <button onClick={reset}>0</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  )
}
