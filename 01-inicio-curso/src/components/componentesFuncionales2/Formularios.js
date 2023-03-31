import { useState } from "react";
export function Formularios(){
// primer form:-------------
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("formulario enviado")
  }
//--------------------------

// segundo form: --------------------

const [form, setForm] = useState({})

//esta funcion se asignara al evento on change de todos los elementos del form que vayan a tener un valor (e.target.value). Es decir, dodne todas las variables de estado sean de tipo string
//Es muy importante que cada elemento del form tenga el atributo name, xq lo que haré es a lo que tenga la variable de estado form (usando spread operator), mas el e.target.name para acceder al nombre del input que esta cambiando, lo desestructuramos con [] sino no se lo puede interpretar, y lo asignamos al e.target.value para que se vuelva una propiedad del objeto y tenga el valor que el usuario inserta.
//En otras palabras, al objeto form, se sumamos lo que ya tenia form, mas el e.target.value e cada elemento.
const handleChange = (e) =>{
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  })
}

//para los input que no tengan valores string sino que tengan e.target.checked, o sea que el estado sea boolean, usaría la siguiente funcion:
const handleChecked = (e)=>{
  setForm({
    ...form,
    [e.target.name]: e.target.checked,
  })
}

//----------------------------------
  return(
    <>
    {/*       FORM 1:
    en este ejercicio lo que hice fue construir un formulario en el que por cada elemento del mismo, tiene un estado, pero si tengo que hacer un formulario grande y mas complejo sería muy engorroso crear una variable e estado por cada elemento del form. Más abajo se hará de otra forma. */}
    <h2>Formularios</h2>

    <p>PRIMER FORM</p>
    <form onSubmit={handleSubmit}>
      {/* La propiedad for de los labels en react se reemplazan por htmlFor-
      La propiedad "for" en las etiquetas de HTML se utiliza para establecer una asociación entre una etiqueta de "label" y un elemento de formulario (como un campo de entrada "input"). La propiedad "for" se utiliza para especificar el "id" del elemento de formulario al que se hace referencia. Cuando el usuario haga clic en el "label", se activará el campo de entrada "input" correspondiente. */}
      <label htmlFor="nombre">Nombre</label>

      {/* El atributo "name" de los elementos de entrada ("input") en HTML se utiliza para proporcionar un nombre único y significativo para el elemento dentro de un formulario. Este atributo se utiliza para identificar los valores enviados al servidor cuando se envía el formulario.

      Cuando se envía un formulario a través de un método HTTP POST, los datos del formulario se envían en el cuerpo de la solicitud y se identifican por sus nombres de entrada ("name") y sus valores correspondientes. Por lo tanto, es importante que cada elemento de entrada tenga un nombre único para que se pueda distinguir entre los distintos campos del formulario y procesarlos correctamente. */}

      {/* El atributo "value" establece el valor actual del elemento de entrada en el momento de renderizar la página. Si el usuario cambia el valor del campo de entrada, el atributo "value" no se actualizará automáticamente para reflejar ese cambio.
      Por otro lado, la propiedad "defaultValue" se utiliza para establecer el valor predeterminado del campo de entrada. Esta propiedad especifica el valor inicial del campo de entrada, que se utiliza si el usuario no cambia el valor del campo de entrada. Si el usuario cambia el valor del campo de entrada y luego lo restablece al valor predeterminado, la propiedad "defaultValue" se utiliza para volver a establecer el valor del campo de entrada.
      En resumen, la diferencia entre el atributo "value" y la propiedad "defaultValue" es que el primero establece el valor actual del campo de entrada, mientras que el segundo establece el valor predeterminado del campo de entrada. */}
      <input 
      type="text" 
      id="nombre" 
      name="nombre" 
      defaultValue="escribe tu nombre"
      value={nombre}
      onChange={(e)=> setNombre(e.target.value)}/>

      <p>Elige tu sabor JS favorito:</p>
      {/* En el caso de los inputs radio, todos deberian tener el mismo "name" para poder solo seleciconar 1 alternativa */}
      <input type="radio" 
      id="vanilla" 
      name="sabor" 
      value="vanilla" 
      onChange={(e)=> setSabor(e.target.value)}></input>
      <label htmlFor="vanilla">vanilla</label>

      <input type="radio" 
      id="react" 
      name="sabor" 
      value="react" 
      onChange={(e)=> setSabor(e.target.value)}
      // Se debe usar la porpiedad defaultChecked para que aaparezca amrcado x defecto, NO checked xq no nos va a dejar cambiar de opcion.
      defaultChecked></input>
      <label htmlFor="react">react</label>

      <input type="radio" 
      id="angular" 
      name="sabor" 
      value="angular" 
      onChange={(e)=> setSabor(e.target.value)}></input>
      <label htmlFor="angular">angular</label>

      <input type="radio" 
      id="vue" 
      name="sabor" 
      value="vue" 
      onChange={(e)=> setSabor(e.target.value)}></input>
      <label htmlFor="vue">vue</label>

      <input type="radio" 
      id="svelte" 
      name="sabor" 
      value="svelte" 
      onChange={(e)=> setSabor(e.target.value)}></input>
      <label htmlFor="svelte">svelte</label>

      <p>Elige tu lenguaje de programacion favorito:</p>
      <select 
      name="lenguaje" 
      onChange={(e)=> setLenguaje(e.target.value)}
      defaultValue="">
        {/* algo similar al checked pasa con el selected, se debe usar la prop defaultValue, en este caso sera el "----", pero si no establecemos uno por defecto será laprimera etiqueta option*/}
        <option value="" selected>----</option>
        <option value="js">JavaScript</option>
        <option value="php">PHP</option>
        <option value="py">Python</option>
        <option value="go">go</option>
        <option value="rb">Ruby</option>
        </select>

        <br></br>

        {/* Para el caso de los input checkboxs, no se usa e.target.value, ya que no contiene texto, tiene un booleano en e.target.cheked */}
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input type="checkbox" 
        id="terminos"
        name="terminos"
        onChange={(e)=> setTerminos(e.target.checked)}
        ></input>


      <br></br>

      <input type="submit"></input>

    </form>

    <br></br><br></br><br></br>
      <p>SEGUNDO FORM</p>
{/*       FORM 2:
      aquí está la otra manera de hacerlo con solo 1 estado: */}
    <form onSubmit={handleSubmit}>

      <label htmlFor="nombre">Nombre</label>
      <input 
      type="text" 
      id="nombre" 
      name="nombre" 
      defaultValue="escribe tu nombre"
      value={form.nombre}
      onChange={handleChange}/>

      <p>Elige tu sabor JS favorito:</p>
      <input type="radio" 
      id="vanilla" 
      name="sabor" 
      value="vanilla" 
      onChange={handleChange}></input>
      <label htmlFor="vanilla">vanilla</label>

      <input type="radio" 
      id="react" 
      name="sabor" 
      value="react" 
      onChange={handleChange}
      
      defaultChecked></input>
      <label htmlFor="react">react</label>

      <input type="radio" 
      id="angular" 
      name="sabor" 
      value="angular" 
      onChange={handleChange}></input>
      <label htmlFor="angular">angular</label>

      <input type="radio" 
      id="vue" 
      name="sabor" 
      value="vue" 
      onChange={handleChange}></input>
      <label htmlFor="vue">vue</label>

      <input type="radio" 
      id="svelte" 
      name="sabor" 
      value="svelte" 
      onChange={handleChange}></input>
      <label htmlFor="svelte">svelte</label>

      <p>Elige tu lenguaje de programacion favorito:</p>
      <select 
      name="lenguaje" 
      onChange={handleChange}
      defaultValue="">
        <option value="" selected>----</option>
        <option value="js">JavaScript</option>
        <option value="php">PHP</option>
        <option value="py">Python</option>
        <option value="go">go</option>
        <option value="rb">Ruby</option>
        </select>

        <br></br>

        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input type="checkbox" 
        id="terminos"
        name="terminos"
        onChange={handleChecked}
        ></input>

      <br></br>

      <input type="submit"></input>

    </form>

    </>
  )
}