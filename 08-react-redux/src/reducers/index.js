import {combineReducers} from 'redux';
import contadorReducer from './contadorReducer';
import { shoppingReducer } from './shoppingReducer';
import { crudReducer } from './crudReducer';

//combineReducers centraliza todos los reducers de la app en uno solo.
//esta funcion revibe un objeto y en cada propiedad reibe cada unos de los reducers que hagamos.
const reducer = combineReducers({
  contador: contadorReducer,
  shopping: shoppingReducer,
  crud: crudReducer
})

export default reducer;

