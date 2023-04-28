//lal funcion reductora toma el estado que pretende actualizar

import { INCREMENT,DECREMENT, INCREMENT_5, DECREMENT_5, RESET } from "../types";

const initialState = 0;
export default function contadorReducer(state= initialState, action){
  switch(action.type){
    case INCREMENT:
      return state +1;
    case DECREMENT:
      return state -1;
    case INCREMENT_5:
      return state + action.payload;
    case DECREMENT_5:
      return state - action.payload;  
    case RESET:
      return initialState;
    default:
      return state;
  }
}