import React, { useState } from 'react'
import ContadorHijo from './ContadorHijo';
import { useCallback } from 'react'
export function Contador(props) {
  const [contador,setContador]=useState(0);
  const [input, setInput] = useState("");
//Primero leer éste archivo con las funciones comunes comentadas, luego con las funciones que utilizan useCallback.
  //funcion comun
  // const sumar = ()=>{
  //   setContador(contador+1)
  // }

  //Funcion con useCallback:
  //Se parece mucho al useEffect, tiene como segundo parametro un arreglo de dependencias, que cuando detecta un cambio en esavariable vuelve a memorizar la funcion.
  const sumar = useCallback(()=>{
    setContador(contador+1)
  },[contador]);

//  const restar = ()=>{
//   setContador(contador-1)
//   }

const restar = useCallback(()=>{
  setContador(contador-1)
},[contador]);


  const handleInput = (e)=>{
    setInput(e.target.value)
  }
  return (
    <>
        <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
      {/* cada vez que sumamos o restamos el componente hijo completo se renderiza, y se ejecura su consolelog.
      Imaginemos que el componente hijo hiciera una peticion get y que traiga imagenes o mucha info. Eso consumiría mucho. Es donde entra la memorizacion, para que si el componente hijo no sufre cambios, aunque la variable de E de lcomponente padre, el hijo se mantenga sin cambios o no se renderice. Ver comonente hijo. */}
      <input type='text' onChange={handleInput} value={input}></input>
      <ContadorHijo contador={contador} sumar={sumar} restar={restar}></ContadorHijo>
    </>
  )
}
