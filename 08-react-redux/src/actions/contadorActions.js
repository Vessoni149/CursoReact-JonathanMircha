import { INCREMENT, DECREMENT, INCREMENT_5, DECREMENT_5, RESET} from '../types/index';
export const sumar = ()=>( {type: INCREMENT} )
export const restar = ()=>( {type: DECREMENT} )
export const sumar_5 = ()=>( {type: INCREMENT_5, payload: 5} );
export const restar_5 = ()=>( {type: DECREMENT_5, payload: 5} );
export const reset = ()=> ({type: RESET});