import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({ el }) => {
  //el elemento el no lo podemso desesctructurar del context porque no es parte de él, es parte del componente padre.
  const {setDataToEdit, deleteData} = useContext(CrudContext);

  let { name, constellation, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;