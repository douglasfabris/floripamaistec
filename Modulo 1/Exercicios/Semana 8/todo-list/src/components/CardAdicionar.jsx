import { useState, useRef } from "react";
import PropTypes from "prop-types";

function CardAdicionar({ adicionarTarefa }) {
  const [tarefa, setTarefa] = useState("");
  const ref = useRef(null);
  const handleAdicionarTarefa = () => {
    if (tarefa) {
      adicionarTarefa(tarefa);
      setTarefa("");
      ref.current.focus();
    }
  };

  return (
    <div className="adicionar">
      <input
        placeholder="Adicionar tarefa"
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        ref={ref}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdicionarTarefa();
          }
        }}
        autoFocus
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
