import { Contador } from './components/Contador';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Memorización en react.</h1>

      <hr></hr>

      <h2>Teoría</h2>
      <h3>Memo:</h3>
      <p>Memo se encarga de memorizar un componente completo. Y Lo vuelve a memorizar o actualizar cuando sus props cambian</p>
      
        <p>Sirve para evitar rerenderizados. Hay que tener cuidado porque a veces la memorizacion puede ser mas costosa que el rerenderizado mismo del componente. En el ejemplo que usamos aca no sería bueno usarlo</p>
        <ul> 
          <li>Usar cuando:</li>
          <li>Tengamos muchos elementos renderizados en una lista. </li>
          <li>Llamados de datos a APIs.</li>
          <li>Cuando un componente sea muy pesado.</li>
          <li>Cuando salen alertas de rendimiento en la consola.</li>
        </ul>
       
        <h3>UseCallback</h3>
        <ul>
          <li>Memoriza una funcion para no volverla a redefinir cuando el commonente que usa esa funcion como prop tenga que renderizarse</li>
          <li>Usarlo siemrpe  que se pase una funcion como prop a un componente que previamente se memorizo con memo.</li>
          <li>Usarlo siempre que se pase una funcion como parametro de un efecto. Es decir, imaginemos que tenemos un useeff con varias funciones y hay una o algunas que no necesita que se vuelva a redefinir, ahi se  puede memorizar con useCallback una funcion que este dentro de useEffect.</li>
        </ul>

        <h3>useMemo</h3>
        <ul>
          <li>Se usa para memorizar un valor calculado, el resultado de una funcion.</li>
          <li>Genera propiedades computadas.</li>
          <li>Usarlo en procesos pesados, que demanden tiempo de espera.</li>
        </ul>
      <hr></hr>
      <Contador></Contador>
    </div>
  );
}

export default App;
