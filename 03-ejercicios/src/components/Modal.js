import React from 'react';
import "./Modal.css";
export function Modal({children, isOpen, closeModal}) {
  //Usar children sirve para que podamso reutilizar un componenete, y mas alla de poder pasarle distintas props, pasarle distinto contenido con etiquetas jsx.


  //Con este evento eviratemos la propagación del evento click en el div que contiene el modal, para que solo se propague el evento de cierre del modal si hacemos click en el article. Sin esta funcion, el evento cierre del modal se ejecutaría haciendo click en cualquier componente hijo del article tambíen.
  const handleModalContainerClick = (e)=>{
    e.stopPropagation();
  }
  return (
    <>
    {/* si isOpen es true se le asigna la clase is-open */}
      <article 
      className={`modal ${isOpen && "is-open"}`}
      // le asigno closeModal al div tmn para que el modal tmb se cierre al darle click fuera del modal
      onClick={closeModal}>
        <div className='modal-container'
        onClick={handleModalContainerClick}>
          <button className='modal-close'
          onClick={closeModal}>X</button>
          {children}
          
        </div>
      </article>
    </>
  )
}
