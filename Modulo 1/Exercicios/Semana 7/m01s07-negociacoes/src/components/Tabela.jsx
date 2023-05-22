import PropTypes from 'prop-types';
import { useState } from 'react';

function Tabela(props) {

  function toData (data) {
    let newDate = new Date(data + "T00:00:00-03:00");
    return newDate.toLocaleDateString();
  }

  function calcularTotal (negociacoes) {
    let total = 0;
    negociacoes.forEach((negociacao) => (
      total += Number(negociacao.valor) * Number(negociacao.quantidade)
    ))
    return total;
  }

  return (
    <table className="table table-hover table-bordered">
      <thead className="table-primary">
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
          {props.negociacoes.map((negociacao, i) => (
            <tr key={i}>
              <td>{toData(negociacao.data)}</td>
              <td>{negociacao.quantidade}</td>
              <td>{Number(negociacao.valor).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
              <td>{(Number(negociacao.valor) * Number(negociacao.quantidade)).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
            </tr>
            ))
          }
      </tbody>

      <tfoot>
        <tr>
          <td colSpan="3" />
          <td>{calcularTotal(props.negociacoes).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Tabela;

Tabela.PropType = {
  negociacoes: PropTypes.array.isRequired,
};
