import { ContactForm } from './components/ContactForm';
import { CrudApi } from './components/CrudApi';
import { CrudApp } from './components/CrudApp';
import { SelectsAnidados } from './components/SelectsAnidados';
import SongSearch from './components/SongSearch';
import  {Modals}  from './components/Modals';



function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <Modals></Modals>
      <hr></hr>
      <ContactForm></ContactForm>
      <hr></hr>
      <SelectsAnidados></SelectsAnidados>
      <hr></hr>
      <SongSearch></SongSearch>
      <hr></hr>
      <CrudApi></CrudApi>
      <br></br>
      <CrudApp></CrudApp>
      <hr></hr>

    </>
  );
}

export default App;
