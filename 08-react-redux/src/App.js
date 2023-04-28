import {Provider} from 'react-redux';
import store from './store/index';
import TeoriaRedux from './components/TeoriaRedux' 
import './App.css';
import { Contador } from './components/Contador';
import { ShoppingCart } from './components/ShoppingCart';
import CrudApi from './components/crud/CrudApi';

function App() {

  //Redux necesita compartir el store con un provider y se le pasa como prop el store donde estan todos los estados
  return (
    <Provider store={store}>
    <div style={{ textAlign: "center" }}>
      <h1>Redux</h1>
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr /> 
      <Contador />
      <hr />
      <TeoriaRedux />
    </div>
  </Provider>
  );
}

export default App;


// Redux sugiere crear una carpeta types  para poner esas funciones en un archivo index y otra actions para las funciones que ejecutan acciones en distintos archivos, y otra carpeta con los reducers ( un archivo x cada funcion reductora). Y otra carpeta store para los estados globales de la app.

//Primero se definene los tipos de acciones en la carpeta types
//Luego se crean las acciones, osea la logica, en la carpeta actions.
//Despues se crea el reducer en su carpeta y su archivo propio. Y dentro de la carpeta reducers se crea el index que va a contener todos los reducers.
//Luego se aplica a la UI