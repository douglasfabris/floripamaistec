import { useState } from "react"
import DadosPessoaisisForm from "./components/DadosPessoais"


function App() {
  const [passoAtual, setPassoAtual] = useState(0)

  function mudarPasso(passo, e) {
    e.preventDefault()
    setPassoAtual(passo)
  }

  return (
    <div>
      <DadosPessoaisisForm/>
    </div>
  )
}

export default App
