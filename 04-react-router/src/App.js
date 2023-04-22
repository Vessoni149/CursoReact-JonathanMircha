import { ConceptosBasicos } from "./components/ConceptosBasicos";

function App() {
  return (
    <div>
      <h1>React router.</h1>
      <a 
      href="https://reactrouter.com/en/main" target="_blank"
      rel="noreferrer"  //esto es para indicar que no enviamos ninguna dependencia o referencia a la nueva ventana.
      >Documentacion.</a>
      <hr></hr>
      <ConceptosBasicos></ConceptosBasicos>
    </div>
  );
}

export default App;
