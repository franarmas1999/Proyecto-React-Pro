//DOC DONDE SE EJECUTA/RENDERIZA TODOS LOS COMPONENTES
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar"


function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
      <ItemListContainer />
    </div>
  );
}

export default App;
