import React from 'react'
import {Modal} from './Modal'
import { UseModal } from '../hooks/useModal'
import { ContactForm } from './ContactForm'
export function Modals(props) {

  
  //se están invocando las variables que retorna el hook personalizado pero se les cambia el nombre
const[isOpenModal1,openModal1,closeModal1] = UseModal(false)
const[isOpenModal2,openModal2,closeModal2] = UseModal(false)
const[isOpenModalContact,openModalContact,closeModalContact] = UseModal(false)
//Por cada modal vamos a necesitar variables de estado para controlar si estan abiertos o cerrados ya que son todos independientes.
  return (
    <>
      <h2>Modales</h2>

      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} 
      closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola, este es el contenido de mi modal 1.</p>
        <img src='https://placeimg.com/640/480/animals' alt='Animal'></img>
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} 
      closeModal={closeModal2}>
        <h3>Otro modal</h3>
        <p>lorem ipsum</p>
        <img src='https://placeimg.com/640/480/nature' alt='Animal'></img>
      </Modal>
      <button onClick={openModalContact}>Modal contacto</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
      <ContactForm></ContactForm>
      </Modal>
    </>
  )
}
