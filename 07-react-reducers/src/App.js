import {Contador} from './components/Contador';
import { ContadorMejorado } from './components/ContadorMejorado';
import { ShoppingCart } from './components/ShoppingCart';
function App() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>useReducer</h1>
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
