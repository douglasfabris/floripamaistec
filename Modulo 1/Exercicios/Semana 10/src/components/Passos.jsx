import { Span } from "./SCSpan"

function Passos({passoAtual}) {

  return ( 
    <div>
      <Span ativo={passoAtual == 0 ? true : false}>
        Dados pessoais
      </Span>
      <Span ativo={passoAtual == 1 ? true : false}>
        Endereço
      </Span>
      <Span ativo={passoAtual == 2 ? true : false}>
        Agradecimento
      </Span>
    </div>
   );
}

export default Passos;