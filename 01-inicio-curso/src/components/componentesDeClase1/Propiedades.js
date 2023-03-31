import React from 'react';
import PropTypes from 'prop-types'
export function Propiedades(props){
  //las props se usan aca, pero se declaran al "ejecutar" el componente.
  return(
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano?"verdadero":"falso"}</li>
        <li>{props.arreglo}</li>
        <li>{props.objeto.nombre + " " + props.objeto.correo}</li>
        {/* se puede pasar como prop una funcion, en este caso la ejecutamos dentro de un .map que recorre el array creado antes. Por cada elemento del array lo multiplica por si mismo. Lugeo con .join, separamos los elementos del array. */}
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  )
}

//propiedades por defecto:
Propiedades.defaultProps = {
  porDefecto: "las props"
}
//no hace falta que la reciba el componente padre.

//Hay un modulo externo de React para tipificar los datos de las props, en decir para especificar sus tipos de datos, el paqeute se instala:
//npm i -s prop-types

//si el tipo de dato no coincide aparecera un warning en consola
//con el isRequired lo que hacemos es que sea obligatorio pasarle esa propiedad al llamar al componente, sino tira un warning.
Propiedades.propTypes ={
numero: PropTypes.number,
cadena: PropTypes.string.isRequired
}