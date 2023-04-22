//En este archivo irá la función reductora, el estado inicial y la efinicion del parametro init si es que se usa en el useReducer().
//Todo debe ser exportado para ser usado en el archivo donde se está ejecutando el useReducer.

import { TYPES } from "../actions/contadorActions";

export const ContadorInit = (initialState)=>{
  return{
    contador: initialState.contador + 100
  }
}
export const contadorInitialState = {contador:0};

export function contadorReducer(state, action){
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
          return contadorInitialState;
      default:
        return state;
  }
}

