import React, { useReducer } from "react";

// useReducer es un hook en React que se utiliza para manejar estados complejos. A diferencia del estado local, que se maneja mediante useState, useReducer es útil cuando el estado tiene una lógica compleja y tiene múltiples subvalores.

// useReducer sigue el patrón de diseño de Redux, donde el estado centralizado se administra mediante la creación de una única fuente de verdad para todo el árbol de componentes.

// Veamos cómo utilizar useReducer en React paso a paso.

// Paso 1: Definir el estado inicial

// Definimos el estado inicial utilizando una variable  que refiera a un objeto. En este ejemplo, utilizamos un objeto con dos propiedades: count y text. Podria tener solo 1.


const initialState = { count: 0, text: "" };

//Paso 2: Definir la función reducer

// La función reducer es la función que actualiza el estado en respuesta a una acción. La función reducer acepta dos argumentos: el estado actual y la acción, que es un objeto que tiene 2 atributos, 1) el type, tipo de accion a realizar, y 2) un payload que es un valor opcional que va a modificar de alguna manera al estado. El type tiene que estar si o si.

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "setText":
      return { ...state, text: action.payload };
    default:
      throw new Error();
  }
}

//En este ejemplo, hemos definido un reducer que actualiza el estado según el tipo de acción proporcionada. La acción es un objeto que tiene una propiedad type que indica el tipo de acción que se está realizando. También puede tener una propiedad payload que contiene los datos necesarios para la acción.

// Paso 3: Usar useReducer en el componente

// Para utilizar useReducer, llamamos a la función useReducer en nuestro componente y pasamos el estado inicial y la función reducer como argumentos. La función useReducer devuelve un objeto con el estado actual y la función dispatch.



function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

// En este ejemplo, hemos utilizado useReducer para manejar el estado en nuestro componente Counter.

// Paso 4: Actualizar el estado utilizando dispatch

// Para actualizar el estado, llamamos a la función dispatch con un objeto que tenga una propiedad type que corresponda a la acción que queremos realizar.
return (
  <>
  <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

{/* En este ejemplo, hemos utilizado el botón para actualizar el estado llamando a la función dispatch con una acción de tipo increment. Una alternativa es declarar el dispatch fuera del return. Dispatch recibe como parametro un objeto con las propiedades type, que permitira seleccionar la accion que ejecutará el reducer, y de ser necesario la propiedad payload si es que se necesita un valor adicional para modificar el estado.
Paso 5: Acceder al estado
Para acceder al estado, simplemente utilizamos la variable state que fue devuelta por useReducer. */}

  <p>Count: {state.count}</p>
  </>
)
}
// En este ejemplo, hemos utilizado una etiqueta p para mostrar el valor actual del contador.

// Conclusión

// En resumen, useReducer es un hook en React que nos permite manejar estados complejos utilizando una función reducer y una acción que actualiza el estado. Al utilizar useReducer, podemos definir el estado inicial, la función reducer, actualizar el estado utilizando dispatch y acceder al estado utilizando la variable state.


//OTROS APUNTES:

//1° crear los archivos xActions.js y xReducer.js
//2° en xActions exportamos una constante con el nombre TYPES que va a ser igual a un objeto con todas las posibles acciones (constantes): (ACTION: "ACTION"). Ej:
export const TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  REMOVE_ALL_FROM_CART:" REMOVE_ALL_FROM_CART",
  CLEAR_CART:"CLEAR_CART"
}
//Empezar por este paso de declarar las opciones hace pensar en la logica de negocio que necesitamos.

//3° En el archivo xReducer generamos un objeto que seerá el estado inicial y lo exportamos.
//En este ejemplo com oestado inicial tendremos 2 arrays:
export const shoppingInitialState = {
  products: [
    {id:1, name:"Producto 1", price:100},
    {id:2, name:"Producto 2", price:200},
    {id:3, name:"Producto 3", price:300},
    {id:4, name:"Producto 4", price:400},
    {id:5, name:"Producto 5", price:500},
    {id:6, name:"Producto 6", price:600}
  ],
  cart:[]
}

//4° Creamos la funcion reducer exportandola, ésta recibirá por parámetro un state y action.
//dento de la funcion pondremos un swith que evaluará action.type. En cada case evaluaremos del objeto TYPES (del archivo xActions) cada una de sus propiedades, y dentro escribiremos la lógica de qué sucederá en caso de que se de ese case. Y por default que retorne el estado que recibió por parametro (state):
export function shoppingReducer(state, actions){
  switch (actions.type){
    case TYPES.ADD_TO_CART:{
  
    }
    case TYPES.REMOVE_ONE_FROM_CART:{
  
    }
    case TYPES.REMOVE_ALL_FROM_CART:{
  
    }
    case TYPES.CLEAR_CART:{
  
    }
    default:
      return state;
  }
  }

  //5° En el componente donde querramos usar reducer creamos el hoock, que va a recibir como parametros la funcion reducer y el estado inicial:
  const[state,dispatch] = useReducer(shoppingReducer, shoppingInitialState)

  //6° desestructuramos las variables que vienen del estado inicial:
  const{products,cart} = state;

  //7° debajo escribimos las funciones que se ejecutaran segun necesitemos:
  const addToCart = ()=>{}
  const deleteFromCart = ()=>{}
  const clearCart = ()=>{}

  //8° En cada funcion hay que usar el dispatch, que se le pasa por parametro un objeto con 1 o 2 propiedades opcionalmente, la primera el type (tipo de accion a realizar) y 2 el payload (valor adicional necesario para la logica de la funcion o accion a ejecutar). En el ej se usara como payload el id porque es la info necesaria para agregar un producto especifio al carrito
  const addToCart = (id)=>{
    dispatch({type:TYPES.ADD_TO_CART, payload:id})
  }

  //9° desarrollar la logica en la funcion reducer para esa accion en particular.