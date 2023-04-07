/* eslint-disable no-nested-ternary */
import { useState } from "react"
import DadosPessoaisisForm from "./components/DadosPessoais"
import Endereco from "./components/Endereco"
import Agradecimento from "./components/Agradecimento"
import { CSHeader } from "./SCHeader"


function App() {
  const [passoAtual, setPassoAtual] = useState(2)

  function mudarPasso(passo, e) {
    e.preventDefault()
    setPassoAtual(passo)
  }

  return (
    <div>
      <CSHeader>
        <h2>Cadastre-se gratuitamente!</h2>
        <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
      </CSHeader>
      <form>
        { passoAtual === 0 ? (<DadosPessoaisisForm/>) : ( passoAtual ===1 ? (<Endereco/>) : (<Agradecimento/>))}
      </form>
      
    </div>
  )
}

export default App
