import { useState } from "react";
import PropTypes from "prop-types";

function CardAdicionar({ adicionarTarefa }) {
  const [tarefa, setTarefa] = useState("");
  const handleAdicionarTarefa = () => {
    if (tarefa) {
      adicionarTarefa(tarefa)
      setTarefa("")
    }
  };

  return (
    <div className="adicionar">
      <input
        placeholder="Adicionar tarefa"
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        required
      />
      <button type="button" onClick={handleAdicionarTarefa}>
        Adicionar tarefa
      </button>
    </div>
  );
}
CardAdicionar.propTypes = {
  adicionarTarefa: PropTypes.func.isRequired,
};

export default CardAdicionar;
