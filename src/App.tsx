import "./App.css";
import Todos from "./components/To-dos";

function App() {
  return (
    <div className="App">
      <Todos items={['hola', 'segundo']}/>
    </div>
  );
}

export default App;
