import { useState } from "react";

function CardAdicionar(props) {
  const [tarefa, setTarefa] = useState("");
  return (
    <div>
      <input
        placeholder="Adicionar tarefa"
        type="text"
        value={props.tarefa}
        onChange={props.aoDigitar}
        required
      />
      <button type="button" onClick={props.adicionarTarefa}>
        Adicionar tarefa
      </button>
    </div>
  );
}

export default CardAdicionar;
