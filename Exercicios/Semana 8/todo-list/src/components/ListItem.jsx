import { useState } from "react";
import PropTypes from "prop-types";

function ListItem(props) {
    const [finalizado, setFinalizado] = useState(props.tarefa.finalizado)

    function finalizar() {
        if (!finalizado) {
            setFinalizado(true)
        }
    }
    return ( 
        <div className="tarefas">
            <p className="tarefa">{props.tarefa.texto}</p>
            <p>{finalizado.toString()}</p>
            <button type="button" onClick={finalizar}>Finalizar tarefa</button>
            <button type="button" onClick={() => props.remover(props.tarefa.id)}>Remover tarefa</button>
        </div>
     );
}

ListItem.propTypes = {
    tarefa: PropTypes.object.isRequired,
    remover: PropTypes.func.isRequired,
};

export default ListItem;