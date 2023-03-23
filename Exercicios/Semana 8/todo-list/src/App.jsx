import { useState } from "react";
import "./App.css";
import CardAdicionar from "./components/CardAdicionar";

function App() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <div>
      <CardAdicionar />
    </div>
  );
}

export default App;
