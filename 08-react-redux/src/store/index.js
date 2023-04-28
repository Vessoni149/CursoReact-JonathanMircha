import { configureStore } from '@reduxjs/toolkit';

import reducer from '../reducers';
//el store es el contenedo de nuestros estados.
//Así se crea el store:
const store = configureStore({reducer});
//El metodo subscribe es el manejador de eventos que va a estar escuchando eventos de los estados.
//en cualquier cambio que haya en el estado suscribe. Recie una funcion que se  ejecuta cuando hay cambios en el estado.
store.subscribe(()=>{
console.log(store)
})

export default store;