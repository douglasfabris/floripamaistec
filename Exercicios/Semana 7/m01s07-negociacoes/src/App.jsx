import { useState } from "react";
import Formulario from "./components/Formulario";
import { GrupoInput } from "./components/GrupoInput";
import { Header } from "./components/Header";
import Tabela from "./components/Tabela";


export const App = () => {
  
  const [negociacoes, setNegociacoes] = useState([])
  function adicionarNegociacao(negociacao) {
    setNegociacoes([...negociacoes, negociacao]);
  }

  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
        <Formulario quandoAdicionar={adicionarNegociacao}/>
      </div>
      <div className="my-5">
        <Tabela negociacoes={negociacoes}/>
      </div>
    </div>
  );
};
