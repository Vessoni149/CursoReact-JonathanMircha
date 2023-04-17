import { CrudForm } from './CrudForm'
import  {CrudTable}  from './CrudTable'
import React, { useState } from 'react';


const initialDb = [
  {
    id:1,
    name: "Seiya",
    constellation: "Pegaso"
  },
  {
    id:2,
    name: "Shiryu",
    constellation: "Dragón"
  },
  {
    id:3,
    name: "Hyoga",
    constellation: "Cisne"
  },
  {
    id:4,
    name: "Shun",
    constellation: "Andromeda"
  },
  {
    id:5,
    name: "Ikki",
    constellation: "Fénix"
  },
]

export function CrudApp() {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data)=>{
    data.id = Date.now();   //esto retorna el segundo actual en el que se ejecuta (solo para asignar un id)
    setDb([...db,data]);
  }
  const updateData = (data)=>{
    //Por cada elemento, si el id de "el" es igual a lo que recibe como dato en id, entonces en esa posicion reemplaza la data que se le pasa, sino el elemento se conserva =.
    let newData = db.map((el)=> el.id === data.id ? data : el);
    setDb(newData);
  }
  const deleteData = (id)=>{
    let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id ${id}?`);
    if(isDelete){
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    }else{
      return
    }
  }

  return (
    <div>
      <h2>Crud App</h2>
      <article className='grid-1-2'>
      <CrudForm 
        createData={createData} 
        updateData={updateData}
        dataToEdit={dataToEdit} 
        setDataToEdit={setDataToEdit}>
      </CrudForm>
      <CrudTable 
        data={db} 
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData}>
      </CrudTable>
      </article>
    </div>
  )
}
