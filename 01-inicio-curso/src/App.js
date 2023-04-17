import logo from './logo.svg';
import './App.css';
import { Propiedades } from './components/componentesDeClase1/Propiedades';
import { Componente } from './components/componentesDeClase1/Componente';
import  RenderizadoCondicional  from './components/componentesDeClase1/RenderizadoCondicional';
import RenderizadoElementos from './components/componentesDeClase1/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/componentesDeClase1/Eventos';
import { Padre } from './components/componentesDeClase1/ComunicacionComponentes';
import { CicloVida } from './components/componentesDeClase1/CicloVida';
import { AjaxApis } from './components/componentesDeClase1/AjaxApis';
import { ContadorHooks } from './components/componentesFuncionales2/ContadorHooks';
import { ScrollHooks } from './components/componentesFuncionales2/ScrollHooks';
import { RelojHooks } from './components/componentesFuncionales2/RelojHooks';
import { AjaxHooks } from './components/componentesFuncionales2/AjaxHooks';
import { HooksPersonalizados } from './components/componentesFuncionales2/HooksPersonalizados';
import { Referencias } from './components/componentesFuncionales2/Referencias';
import { Formularios } from './components/componentesFuncionales2/Formularios';
import { Estilos } from './components/componentesFuncionales2/Estilos';
import { ComponentesEstilizados } from './components/componentesFuncionales2/ComponentesEstilizados';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr></hr>
        {/* Veremos en el componente Propiedades, todos los tipos de dato y elementos que pueden ser recibidas como prop. 
        Todo lo que no sea string debe ir entre {}. El booleano por si solo no se renderiza, equivale a 0 o 1.*/}
        <Propiedades
        cadena="cadena de texto"
        numero={19}
        booleano={true}
        arreglo={[1,2,3]}
        objeto={{nombre:"Jon",correo:"asd@gmail.com"}}
        funcion={(num) => num*num}
        elementoReact={<i>esto es un elemento React.</i>}
        componenteReact={<Componente msj="soy un componente pasado como prop"/>}
        />
        <hr></hr>
        <RenderizadoCondicional></RenderizadoCondicional>
        <hr></hr>
        <RenderizadoElementos></RenderizadoElementos>
        <hr></hr>
        <EventosES6></EventosES6>
        <hr></hr>
        <EventosES7></EventosES7>
        <hr></hr>
        <MasSobreEventos></MasSobreEventos>
        <hr></hr>
        {/* Comunicacion entre componentes */}
        <Padre></Padre>   
        <hr></hr>
        <CicloVida></CicloVida>
        <hr></hr>
        <AjaxApis></AjaxApis>
        <hr></hr>
        <ContadorHooks></ContadorHooks>
        <hr></hr>
        <ScrollHooks></ScrollHooks>
        <hr></hr>
        <RelojHooks></RelojHooks>
        <hr></hr>
        <AjaxHooks/>
        <hr></hr>
        <HooksPersonalizados></HooksPersonalizados>
        <hr></hr>
        <Referencias></Referencias>
        <hr></hr>
        <Formularios></Formularios>
        <hr></hr>
        <Estilos></Estilos>
        <hr></hr>
        <ComponentesEstilizados></ComponentesEstilizados>
        <hr></hr>

        <hr></hr>
        
      </header>
      
    </div>
  );
}



export default App;
