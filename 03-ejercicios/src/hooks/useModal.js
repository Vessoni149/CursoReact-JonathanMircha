import { useState } from "react";

//Como vamos a tener varios modales, creo éste como un hook para poderlo reutilizar varias veces en Modals.js
export function UseModal(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue)
  const openModal = ()=> setIsOpen(true);
  const closeModal = ()=> setIsOpen(false);
  return [isOpen, openModal, closeModal];
} 
