import { useState } from "react";
import "./App.css";
import CardAdicionar from "./components/CardAdicionar";
import uniqid from "uniqid";
import ListItem from "./components/ListItem";

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

  function removerTarefa(id) {
    let tarefasNew = tarefas.filter(tarefa => tarefa.id !== id)
    setTarefas(tarefasNew)
  }

  return (
    <div>
      <h1>TODO List</h1>
      <CardAdicionar adicionarTarefa={adicionarTarefa}/>
      {tarefas.map((tarefa) =>
        <ListItem tarefa={tarefa} key={tarefa.id} remover={removerTarefa}/>
      )}
    </div>
  );
}

export default App;
