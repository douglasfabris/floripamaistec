import { GrupoInput } from "./GrupoInput";
import PropTypes from "prop-types";
import { useState } from "react";


export default function Formulario({quandoAdicionar}) {
    const [data, setData] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [valor, setValor] = useState("")

    function handleAdicionarNegociacao() {
        const negociacao = {
            data: data,
            quantidade: quantidade,
            valor: valor
        }
        quandoAdicionar(negociacao)
        console.log(negociacao)
    }

    return (
        <form className="form container">
            <div className="row">
                <GrupoInput id="data" etiqueta="Data" tipo="date" value={data} aoDigitar={(e) => setData(e.target.value)} />
                <GrupoInput tipo="number" min="1" step="1" id="quantidade" className="form-control" value={quantidade} etiqueta="Quantidade" aoDigitar={(e) => setQuantidade(e.target.value)} />
                <GrupoInput etiqueta="valor" id="valor" tipo="number" className="form-control" min="0.01" step="0.01" value={valor} aoDigitar={(e) => setValor(e.target.value)}/>
                <div className="col-1 d-flex align-items-end justify-content-end">
                    <button className="btn btn-primary" type="button" onClick={handleAdicionarNegociacao}>Incluir</button>
                </div>
            </div>
        </form>
    )
}

Formulario.PropType = {
    quandoAdicionar: PropTypes.func.isRequired,
}