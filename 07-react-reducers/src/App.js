import {Contador} from './components/Contador';
import { ContadorMejorado } from './components/ContadorMejorado';
import { ShoppingCart } from './components/ShoppingCart';
import CrudApi from './components/crud/CrudApi'
function App() {
  return (
    <div style={{textAlign:"center"}}>
      <hr></hr>
      <CrudApi></CrudApi>
      <hr></hr>
      <ShoppingCart></ShoppingCart>
      <hr></hr>
      <hr></hr>
      <ContadorMejorado></ContadorMejorado>
      <hr></hr>
      <Contador></Contador>
    </div>
  );
}

export default App;
