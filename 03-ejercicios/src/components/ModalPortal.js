import React from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css";

//Para usar portales:
//En el index html de la carpeta public crear un div y asignarle un id.
//Crear un componente que será el modal, en éste caso ModalPortal.
//ese componente va a retornar la funcion ReactDOM.createPortal(elementos jsx, seleccion del id).
//Como vemos, al igual que el metodo render tiene 2 parametros, 1 lo que se va a renderizar y 2 la seleccion del nodo html donde se va a renderizar. importar ReactDOM from 'react-dom';
//Luego hay que usar el componente en algun lugar.



export function ModalPortal({children, isOpen, closeModal}) {
  
  const handleModalContainerClick = (e)=>{
    e.stopPropagation();
  }
  return ReactDOM.createPortal(
    <>
      <article 
      className={`modal ${isOpen && "is-open"}`}
      onClick={closeModal}>
        <div className='modal-container'
        onClick={handleModalContainerClick}>
          <button className='modal-close'
          onClick={closeModal}>X</button>
          {children}
        </div>
      </article>
    </>, document.getElementById("modal")
  )
}
