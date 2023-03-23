import { useState } from "react";
import "./App.css";
import CardAdicionar from "./components/CardAdicionar";
import uniqid from "uniqid";

function App() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(texto) {
    const tarefa = {
      id: uniqid(),
      texto: texto,
      finalizado: false,
    }
    setTarefas([...tarefas, tarefa])
  }

  return (
    <div>
      <CardAdicionar adicionarTarefa={adicionarTarefa}/>
    </div>
  );
}

export default App;
