/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';

export function GrupoInput(props) {
  return (
    <div className="form-group col">
      <label htmlFor={props.id}>{props.etiqueta}</label>
      <input type={props.tipo} id={props.id} min={props.min} step={props.step} className="form-control" value={props.valor} onChange={props.aoDigitar} required />
    </div>
  );
}

GrupoInput.PropType = {
  tipo: PropTypes.array.isRequired,
  etiqueta: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  min: PropTypes.number,
  step: PropTypes.number,
  valor: PropTypes.string.isRequired,
  aoDigitar: PropTypes.func.isRequired,
};
