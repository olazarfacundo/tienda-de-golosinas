import './App.css';
import Saludo from "./Components/Saludo"
import dayjs from "dayjs"

function App() {
  console.log(localStorage)
  return (
    <div className="App">
      Sacamos el saludo y ponemos este texto.
      <Saludo/>
    </div>
  );
}

export default App;
