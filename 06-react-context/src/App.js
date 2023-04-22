import CrudApi from "./components/CrudApi/CrudApi";
import { MyPage } from "./components/MyPage";
import { MyPageContext } from "./components/MyPageContext";
import { CrudProvider } from "./components/context/CrudContext";


function App() {
  return (
    <div>
      <h1>React context API</h1>
      <CrudProvider>
        <CrudApi></CrudApi>
      </CrudProvider>
      
      <hr></hr>
      <MyPage></MyPage>
      <hr></hr>
      <MyPageContext></MyPageContext>
      
      
    </div>
  );
}

export default App;
