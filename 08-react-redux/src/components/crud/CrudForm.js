import React from 'react'
import { useState,useEffect } from 'react'

const initialForm ={
  name:"",
  constellation:"",
  id: null
}
export function CrudForm({createData, updateData, dataToEdit, setDataToEdit}) {

  const [form, setForm] = useState(initialForm);

useEffect(() => {
  if(dataToEdit){
    setForm(dataToEdit);
  }else{
    setForm(initialForm);
  }
}, [dataToEdit]);

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
    //Los corchetes en la línea [e.target.name]: e.target.value son una sintaxis llamada "propiedad calculada" en JavaScript. Esta sintaxis permite que la propiedad de un objeto se calcule dinámicamente en tiempo de ejecución, en lugar de tener que ser especificada de forma estática en el código.
    // En este caso, la propiedad calculada es el nombre de la propiedad que se actualizará en el objeto form. En lugar de tener un nombre de propiedad fijo, se utiliza el valor de la propiedad name del elemento de entrada (input) que ha desencadenado el evento. Esto significa que la propiedad que se actualizará en el objeto form tendrá el mismo nombre que el valor de la propiedad name del input.
    // Por ejemplo, si el input tiene un atributo name de "username", la propiedad que se actualizará en el objeto form será "username": e.target.value. Si el input tiene un atributo name de "email", la propiedad actualizada será "email": e.target.value.
    // En resumen, los corchetes en esta línea permiten que la propiedad del objeto form que se actualizará se calcule dinámicamente en tiempo de ejecución, en función del valor de la propiedad name del input que ha desencadenado el evento.
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!form.name || !form.constellation){
      alert("Datos incompletos");
      return;
    }
    if(form.id === null){
      createData(form)
    }else{
      updateData(form)
    }
    handleReset();
  }
  const handleReset = (e)=>{
    setForm(initialForm);
    setDataToEdit(null);
  }

  return (  
    <div>
      <h3>{dataToEdit? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>

        <input type="text" 
        name="name" 
        placeholder='Nombre' 
        onChange={handleChange} 
        value={form.name}></input>

        <input type="text" 
        name="constellation" 
        placeholder='Constelación' 
        onChange={handleChange} 
        value={form.constellation}></input>

        <input type='submit' 
        value="Enviar"></input>

        <input type='reset' 
        value="Limpiar" 
        onClick={handleReset}></input>
      </form>
    </div>
  )
}
