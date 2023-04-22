import React, { useContext } from "react";
import CrudTableRow from "./CrudTableRow";
import CrudContext from "../context/CrudContext";

const CrudTable = () => {
  //Aca vamos a desestructurar laa variable del CrudContext que necesitamos en este archivo (db es la única, xq las otras las usa el hijo). Particularmente db es la prop que pasamos en el CrudContext, pero en este archivo se usa como data, entondes a db vamos a ponerle un alias con ":" que va a ser data:
  const {db:data} = useContext(CrudContext);

  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;