/* eslint-disable no-nested-ternary */
import { useState } from "react"
import DadosPessoaisisForm from "./components/DadosPessoais"
import Endereco from "./components/Endereco"
import Agradecimento from "./components/Agradecimento"


function App() {
  const [passoAtual, setPassoAtual] = useState(2)

  function mudarPasso(passo, e) {
    e.preventDefault()
    setPassoAtual(passo)
  }

  return (
    <div>
      <form>
        { passoAtual === 0 ? (<DadosPessoaisisForm/>) : ( passoAtual ===1 ? (<Endereco/>) : (<Agradecimento/>))}
      </form>
      
    </div>
  )
}

export default App
