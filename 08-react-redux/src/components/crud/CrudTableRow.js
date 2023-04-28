import React from 'react'

export function CrudTableRow({el, setDataToEdit, deleteData}) {
  //La desestructuración es una característica de JavaScript que permite extraer valores de objetos y arreglos en variables separadas de manera más fácil y concisa.
  // En el ejemplo proporcionado, let { name, constellation, id } = el; significa que se está extrayendo tres propiedades del objeto el y se están asignando a tres variables separadas llamadas name, constellation e id. Esto es equivalente a escribir:
  // let name = el.name;
  // let constellation = el.constellation;
  // let id = el.id;
  //En objetos:
  //También es posible asignar valores predeterminados a las variables en caso de que la propiedad correspondiente no esté presente en el objeto:
  //let { name, constellation, id, age = 0 } = el;


  let { name, constellation,id} = el;

  return (
    <>
      <tr>
          <td>{el.name}</td>
          <td>{el.constellation}</td>
          <td>
            <button onClick={()=> setDataToEdit(el)}>Editar</button>
            <button onClick={()=> deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    </>
  )
}
