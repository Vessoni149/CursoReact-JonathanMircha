//Las referancias son la maenra de controlar un elemento que ya fue cargado al dom. Ej: un menu hamburguesa que se despliega y repliega, un video que se reproduce y pausa. Acá no sirve usar variables de estado para renderizar ui. Acá los componentes ya estan crgados al dom. Acá entran en juego las ref. que permite seleccionar el elemento del dom y trabajarlo si renderizar nada. Otros ejemplos de uso, contorlar enfoques, seleccion de texto,  activar animaciones.
import React, {createRef, useRef} from "react"
export function Referencias(){

  //esta forma de hacerlo es de javascript vanilla, en react nos dan una herramienta para hacerlo, las referencias.
  //Este evento sería ejecutado al darle click al boton.
  // const handleToogleMenu = (e)=>{
  //   const $menu = document.getElementById("menu");
  //   if(e.target.textConttent === "Menu"){
  //     e.target.textConttent = "Cerrar";
  //     $menu.style.display = "block";
  //   }else{
  //     e.target.textConttent = "Menu";
  //     $menu.style.display = "none";
  //   }
  // }

  //Usando referencias:

  //let refMenu = createRef(); //createRef es para class components.
  let refMenu = useRef(); 
  let refMenuBtn = useRef();    //useRef para componentes funcionales.
  //La referencia es como un selector para un elemento del dom pero en react.

  //console.log(refMenu, refMenuBtn);  //veremos que los use ref son un objeto  que tienen una propiedad current, que tiene como valor el nombre de la referencia.

  const handleToogleMenu = (e)=>{
    if(refMenuBtn.current.textConttent === "Menu"){
      refMenuBtn.current.textConttent = "Cerrar";
      refMenu.current.style.display = "block";
      }else{
        refMenuBtn.current.textConttent = "Menu";
        refMenu.current.style.display = "none";
        }
    }


  return(
    <>
    <h2>Referencias</h2>
    <button ref={refMenuBtn} id="menu-btn" onClick={handleToogleMenu}>Menu</button>
    <nav ref={refMenu} id="menu" style={{display:"none"}}>
      <a href="#">Seccion 1</a><br></br>
      <a href="#">Seccion 2</a><br></br>
      <a href="#">Seccion 3</a><br></br>
      <a href="#">Seccion 4</a><br></br>
      <a href="#">Seccion 4</a><br></br>
    </nav>
    </>
  )
}
//No hay que hacer abuso del uso excesivo de referencias ya que éstas, a diferencias de los estados que actúan en el virtual dom, actúan directamente en el dom.