import React, {useState, useEffect} from "react";

export function ScrollHooks(){
  const [scrollY, setScrollY] = useState(0);
  //se pueden usar tantos useEffect como se necesiten.
  //Use efect tiene 2 parametros, el primero una funcion flecha con el codigo que queremos que se ejecute, y el segundo una lista de dependencias "dependency list", un arreglo al que le pasamos una/s variable/s de estado que queremos estar controlando. 
  //hay 3 modos de uso:
  // Con variable/s en el array. El use Effeect se va a ejecutar cada vez que esa/s variable/s cambie/n o se actualicen.
  //si dejamos el arrai vacio solo se ejecuta 1 vez, al montar la app, al inicializarla, x eso fase de montaje. 
  //Si no ponemos segundo parametro,es decir si ni si quiera ponemos el array, se va a ejecutar con cada cambio de cualquier elemento del componente.
//casos de uso: 
//Se recomienda usarlo con el arrai vacío para el caso de peticiones a servidores, para que las haga 1 vez al iniciar la app, y no todo el tiempo cuando alguna variable cambie. Así podremos asignar el resultado de esa peticion a un estado.
//cuando tenemos una interfaz que esta cambiando de estado y queremos que en otra parte de la interfaz  vaya cambiando también.
//Si le ponemos un return en cualquiera de los 3 casos mencionados, react interpreta que tiene que desmontar el effecto, x ej desuscribirte de servicios, desconectar de apis, limpiar intervalos de tiempo, manejadores de evento, o componentes que dejan de existir. Se debe retornar una arrow function.
  useEffect(()=>{
    
      console.log("moviendo el scroll, fase actualizacion del estado del scroll")
      const detectarScroll = ()=> setScrollY(window.scrollY);

      window.addEventListener("scroll", detectarScroll);

      return ()=>{ 
        window.removeEventListener("scroll",detectarScroll);
        console.log("fase desmontaje");
      }
},[scrollY]);
useEffect(()=>{
  console.log("Fase de montaje, se ejecuta al iniciar la app")
},[])
useEffect(()=>{
  console.log("Fase de actualizacion general para cualquier elemento o estado de este componente")
})
useEffect(()=>{
  return ()=>{
    console.log("fase desmontaje")
  }
})

  return(
    <> <h2>Hoos useEffect y el ciclo de vida</h2>
  <p>scroll Y del navegador {scrollY}px </p>

    </>
  )
}