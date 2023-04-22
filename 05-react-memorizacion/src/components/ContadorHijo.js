import React from 'react'
import { memo, useMemo } from 'react'

// Acá hay que importar memo de react y usarlo al momento de exportar el componente. Memo es una función y le vamos a pasar por parametro al componente. Y así ya no se va a rerenderizar al cambiar el E del apdre. El componente hijo si se rerenderizara cunado cambie un estado en él o cuando se le pase alguna prop.
//Entonces veremos que el input no hace rerenderizar al hijo, pero el contador si xq está pasado como prop.
//Ahora, distinto es el tema si la prop que le pasamos es una funcion.
//En este caso además de pasar contador como prop, pasamos 2 funciones, sumar y resta, y ahora sí se está rerenderizando este componente hijo, memo dejó de funcionar.
//Memo memoriza el componente, pero cuando le pasamos funciones como props a ese componente, a esas funciones también hay que memorizarlas de alguna forma. Para eso se usa el hook useCallback, que memoriza funciones puras en vez de componentes.
//Para usarlo hay que modificar las funciones creadas en el padre que seran pasadas como prop al hijo (sumar y restar) y usar useCallback. (En el compo padre comenté las funciones comunes y deje las que implementan useCallback.).
//Así, ahora cuando escriba en el input, si va a funcionar el Memo a pesar de que haya funciones pasadas como props.
//Ahora las funciones  que se utilizan como props en el compo hijo ya no se rerenderizan.

function ContadorHijo({contador,sumar,restar}) {
  console.log("hijo contador se renderiza")


  //useMemo:
  //En este ejemplo veremos una operacion que consume mucho recurso y relentiza la carga del sitio, que se va a ejecutar en la primer carga de la pagina y tmb cuando ejecutemos las funciones de sumar y restar.
  //Podemos memorizar el valor calculado con useMemo.

  //Funcion sin useMemo:
  // let  superNumero = 0;
  // for(let i = 0; i<1000000000; i++){
  //   superNumero++;
  // }

//Funcion con useMemo:
//Tmb tiene 2 parametros, una funcion y un arreglo de depencendias, pero como aca no usamos estado va a ir vacío.
const superNumero = useMemo(()=>{
  let  numero = 0;
  for(let i = 0; i<1000000000; i++){
    numero++;
  }
  return numero;
} ,[])
//useMemo no memoriza una funcion sino el valor calculado por una funcion u otro resultado.
//en la funcion tenemos que retornar lo que se va a memorizar.

  return (
      <div>
        <h2>Hijo del contador</h2>
        <h3>{contador}</h3>

        <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
      </div>
  )
}
export default memo(ContadorHijo)

