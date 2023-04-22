import React from 'react'
import { useReducer} from 'react'
import { ContadorInit, contadorInitialState, contadorReducer } from '../reducers/contadorReducer';
import { TYPES } from '../actions/contadorActions';

export function ContadorMejorado() {

//Normalmente es mejor dividir al reducer en carpetas, por un lado poner las acciones y por otro los reducers.

  const [state, dispatch] = useReducer(contadorReducer, 
    contadorInitialState, 
    ContadorInit);


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
      <h2>Contador mejorado con Reducer</h2>
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
