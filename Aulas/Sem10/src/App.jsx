import { useState } from 'react'
import './App.css'
import {Button} from './Button.jsx'
import { Input } from './Input'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Nome:
      <Input/>
      Senha:
      <Input/>
      <Button>Login</Button>
    </div>
  )
}

export default App
