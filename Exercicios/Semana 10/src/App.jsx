/* eslint-disable no-nested-ternary */
import { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { FcNext, FcPrevious, FcOk } from "react-icons/fc"
import DadosPessoaisisForm from "./components/DadosPessoais"
import Endereco from "./components/Endereco"
import Agradecimento from "./components/Agradecimento"
import { CSHeader } from "./SCHeader"



function App() {
  const [passoAtual, setPassoAtual] = useState(2)

  function mudarPasso(passo) {
    setPassoAtual(passo)
  }

  return (
    <div>
      <CSHeader>
        <h2>Cadastre-se gratuitamente!</h2>
        <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
      </CSHeader>
      <form>
        { passoAtual === 0 ? (<DadosPessoaisisForm/>) : ( passoAtual === 1 ? (<Endereco/>) : (<Agradecimento/>))}
        <div>
          { passoAtual !== 0 ? (<Button variant="primary" type="button" onClick={() => mudarPasso(passoAtual-1)}><FcPrevious/> Voltar</Button>) : ("")}
          { passoAtual !== 2 ? (<Button variant="primary" type="button" onClick={() => mudarPasso(passoAtual+1)}>Avançar <FcNext/></Button>) : (<Button variant="primary" type="button">Enviar <FcOk /></Button>)}
        </div>

      </form>
      
    </div>
  )
}

export default App
