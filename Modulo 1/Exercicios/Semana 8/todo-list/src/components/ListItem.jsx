import { useState } from "react";
import PropTypes from "prop-types";

function ListItem(props) {
  const [finalizado, setFinalizado] = useState(props.tarefa.finalizado);

  function finalizar() {
    setFinalizado(!finalizado);
  }

  return (
    <div className="tarefas">
      <p className="tarefa" style={{ textDecoration: finalizado ? "line-through" : ""}}>{props.tarefa.texto}</p>
      <div className="check">
        <input
          className="checkbox"
          type="checkbox"
          checked={finalizado}
          onChange={finalizar}
        />
      </div>
      <div className="check">
        <button type="button" onClick={() => props.remover(props.tarefa.id)}>
          Remover tarefa
        </button>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  tarefa: PropTypes.object.isRequired,
  remover: PropTypes.func.isRequired,
};

export default ListItem;
