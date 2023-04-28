import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reset, sumar, restar, sumar_5, restar_5} from '../actions/contadorActions';

export function Contador(props) {
  //useSelectos es como useState que nos permite acceder a los estados globales de redux.
  const state = useSelector(state => state)
  const dispatch = useDispatch();
  return (
    <>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={()=>dispatch(sumar_5())}>+5</button>
        <button onClick={()=>dispatch(sumar())}>+1</button>
        <button onClick={()=>dispatch(reset())}>0</button>
        <button onClick={()=>dispatch(restar())}>-1</button>
        <button onClick={()=>dispatch(restar_5())}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </>
  )
}
